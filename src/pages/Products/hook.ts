import { notification } from "antd";
import { useEffect, useState } from "react";

import { API_ENDPOINTS } from "../../constants";
import { axios } from "../../libraries";
import storage from "../../config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export type ReceivedProps = Record<string, any>;

type IProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  desc: string;
  rate: number;
};

const useHook = (props: any) => {
  const [dataProducts, setDataProducts] = useState<IProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState(null);
  const [idEdit, setIdEdit] = useState();
  const [search, setSearch] = useState("");
  // const [loadingBtn, setLoadingBtn] = useState(false);

  const option = [
    {
      value: "1",
      label: "1 sao",
    },
    {
      value: "2",
      label: "2 sao",
    },
    {
      value: "3",
      label: "3 sao",
    },
    {
      value: "4",
      label: "4 sao",
    },
    {
      value: "5",
      label: "5 sao",
    },
  ];

  const [imgUrl, setImgUrl] = useState<any>();

  const handleUpload = (value: any) => {
    const file = value.target.files[0];
    if (!file) {
      alert("Please upload an image first!");
    }
    // setLoadingBtn(true);
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on("state_changed", () => {
      // download url
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        setImgUrl(url);
        // setLoadingBtn(false);
      });
    });
  };

  //crud

  const getProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(API_ENDPOINTS.PRODUCTS);
      setDataProducts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // eslint-disable-next-line no-console
      console.log("errorr=====", error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const addProduct = async (values: any) => {
    setLoading(true);
    try {
      await axios.post(`${API_ENDPOINTS.PRODUCTS}`, {
        name: values.name,
        price: values.price,
        desc: values.desc,
        rate: values.rate,
        image: imgUrl,
      });
      setImgUrl("");
      getProducts();
      setVisible(false);
      setLoading(false);
      notification["success"]({
        message: "Thêm sản phẩm thành công ",
      });
    } catch (error) {
      notification["error"]({
        message: "Notification Title",
      });
    }
  };

  const editProduct = async (product: any) => {
    setLoading(true);
    try {
      await axios.put(`${API_ENDPOINTS.PRODUCTS}/${idEdit}`, {
        name: product.name,
        price: product.price,
        desc: product.desc,
        rate: product.rate,
        image: imgUrl,
      });
      setVisible(false);
      setLoading(false);
      setIdEdit(undefined);
      getProducts();
      notification["success"]({
        message: "sửa sản phẩm thành công ",
      });
    } catch (error) {
      setLoading(false);
      notification["error"]({
        message: "Notification Title",
      });
    }
  };

  const removeProducts = async (id: any) => {
    try {
      await axios.delete(`${API_ENDPOINTS.PRODUCTS}/${id}`);
      getProducts();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log("error", error);
    }
  };
  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };

  const getInitialValues = (data?: any) => ({
    name: data?.name || "",
    price: data?.price || "",
    desc: data?.desc || "",
    rate: data?.rate || "3",
    // image: data?.image || "",
  });

  const searchData = (dataProducts: any) => {
    return (
      dataProducts &&
      dataProducts.filter((item: any) => item.name.includes(search))
    );
  };

  //uploadimg

  return {
    ...props,
    dataProducts,
    option,
    setDataProducts,
    removeProducts,
    loading,
    // loadingBtn,
    visible,
    setVisible,
    openModal,
    closeModal,
    addProduct,
    isEdit,
    idEdit,
    setIsEdit,
    getInitialValues,
    editProduct,
    setIdEdit,
    search,
    setSearch,
    searchData,
    handleUpload,
    // setLoadingBtn,
  };
};

export type Props = ReturnType<typeof useHook>;

export default useHook;

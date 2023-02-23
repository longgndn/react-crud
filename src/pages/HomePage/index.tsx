import { FC } from "react";
import {
  InputField,
  Loading,
  Modal,
  Table,
  SelectField,
} from "@common/components";
import useHook, { Props, ReceivedProps } from "./hook";
import { Button, Rate } from "antd";
import { Formik } from "formik";
import { Form, Input } from "formik-antd";
import { Input as InputAntd } from "antd";
import { validateSchema } from "./validate";

const HomePageLayout: FC<Props> = ({
  dataProducts,
  removeProducts,
  option,
  loading,
  visible,
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
}) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_: any, record: any) => (
        <div>
          <img style={{ width: "100px", height: "100px" }} src={record.image} />
        </div>
      ),
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
      render: (_: any, record: any) => (
        <>
          <Rate value={record.rate} disabled />
        </>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Desc",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: any) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Button onClick={() => removeProducts(record.id)}>Delete</Button>
          <Button
            type="primary"
            onClick={() => {
              openModal();
              setIsEdit(record);
              setIdEdit(record.id);
            }}
          >
            Edit Product
          </Button>
        </div>
      ),
    },
  ];

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="input-search">
        <InputAntd
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px 0" }}
      >
        <Button
          onClick={() => {
            setIsEdit(null);
            openModal();
          }}
        >
          Add Product
        </Button>
      </div>
      <Table data={searchData(dataProducts)} columns={columns} />

      <Formik
        initialValues={getInitialValues(isEdit)}
        validationSchema={validateSchema}
        onSubmit={(value) => (idEdit ? editProduct(value) : addProduct(value))}
        enableReinitialize
        render={({ handleSubmit }) => {
          return (
            <Modal visible={visible} onOk={handleSubmit} onCancel={closeModal}>
              <Form>
                <InputField
                  name="name"
                  label="name"
                  placeholder="name product"
                />

                <InputField
                  name="price"
                  label="price"
                  placeholder="Price product"
                />

                <InputField
                  name="desc"
                  label="desc"
                  placeholder="Desc product"
                />

                <SelectField
                  name="rate"
                  placeholder="rate product"
                  options={option}
                  defaultValue="3"
                  label="Rate product"
                />

                <div className="label">upload: </div>
                <Input type="file" name="image" onChange={handleUpload} />
              </Form>
            </Modal>
          );
        }}
      />
    </div>
  );
};
const HomePage: FC<ReceivedProps> = (props) => (
  <HomePageLayout {...useHook(props)} />
);

export default HomePage;

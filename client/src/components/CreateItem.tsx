import React, { useEffect, useState } from "react";
import useAppSelector from "../hooks/useAppSelector.hook";
import { useHttp } from "../hooks/useHttp.hook";
import { dateNow } from "../../../src/utils/main";
import { useMessage } from "../hooks/useMessage.hook";
import useAppDispatch from "../hooks/useAppDispatch.hook";
import { setItems } from "../redux/slices/itemSlice";

interface Entry {
  number: number,
  dateOfItem: string,
  nameOfDocument: string,
  numberOfDocument: number,
  dateOfDocument: string,
  provider: string,
  name: string,
  code: string,
  unitOfMeasure: string,
  price: number,
  arrived: number,
  out: number,
  amount: number,
  serialCode: string
}

const CreateItem = ({length}:any) => {
  const initialForm: Entry = {
    number: 0,
    dateOfItem: "",
    nameOfDocument: "",
    numberOfDocument: 0,
    dateOfDocument: "",
    provider: "",
    name: "",
    code: "",
    unitOfMeasure: "",
    price: 0,
    arrived: 0,
    out: 0,
    amount: 0,
    serialCode: "",
  };
  const {error, request, clearError, loading} = useHttp();
  const message = useMessage()
  const token: string | null = useAppSelector(state => state.token.accessToken);
  const [form, setForm] = useState<Entry>(initialForm);
  const dispatch = useAppDispatch();


  useEffect(() => {
    message(error);
    clearError();
  }, [error, clearError, loading]);

  const changeHandler = (event: any) => {
    setForm((prevState: Entry) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const clickHandler = async () => {
    setForm((prevState: Entry) => {
      if (length !== undefined) {
        return { ...prevState, number: length + 1, dateOfItem: dateNow() };
      } else {
        console.log("length is undefined");
      }
      return prevState
    });
    console.log("FORM", form);
    const response = await request("http://localhost:5000/api/item", "POST", {...form}, { "Authorization": `Bearer ${token}` })
    if(response){
      message(response.message)
    }
  };

  return (
    <div className={"container"}>
      <h5 className={"center-align"} style={{ color: "#E1E1E1" }}>Створити запис</h5>
      <div className="row" style={{ marginTop: 20 }}>
        <form className="col s12" style={{ paddingLeft: 100, paddingRight: 100 }}>
          <div className="row">
            <div className="input-field col s4">

              <input
                id="nameOfDocument"
                name="nameOfDocument"
                type="text"
                className="validate"
                value={form.nameOfDocument}
                onChange={changeHandler}
              />
              <label className="active" htmlFor="nameOfDocument">Назва документа</label>
            </div>
            <div className="input-field col s4">

              <input
                id="numberOfDocument"
                name="numberOfDocument"
                type="text"
                className="validate"
                value={form.numberOfDocument}
                onChange={changeHandler}
              />
              <label className="active" htmlFor="numberOfDocument">Номер документу</label>
            </div>
            <div className="input-field col s4">

              <input
                id="dateOfDocument"
                name="dateOfDocument"
                type="date"
                className="validate"
                value={form.dateOfDocument}
                onChange={changeHandler}
              />
              <label className="active" htmlFor="dateOfDocument">Дата документу</label>
            </div>
          </div>
          <div className={"row"}>
            <div className="input-field col s4">

              <input
                id="provider"
                name="provider"
                type="text"
                className="validate"
                value={form.provider}
                onChange={changeHandler}
              />
              <label className="active" htmlFor="provider">Постачальник</label>
            </div>
            <div className="input-field col s4">

              <input
                id="name"
                name="name"
                type="text"
                className="validate"
                value={form.name}
                onChange={changeHandler}
              />
              <label className="active" htmlFor="name">Назва запису</label>
            </div>
            <div className="input-field col s4">

              <input
                id="code"
                name="code"
                type="text"
                className="validate"
                value={form.code}
                onChange={changeHandler}
              />
              <label className="active" htmlFor="code">Код</label>
            </div>
          </div>
          <div className={"row"}>
            <div className="input-field col s2">

              <input
                id="unitOfMeasure"
                name="unitOfMeasure"
                type="text"
                className="validate"
                value={form.unitOfMeasure}
                onChange={changeHandler}
              />
              <label className="active" htmlFor="unitOfMeasure">Одиниця виміру</label>
            </div>
            <div className="input-field col s4">

              <input
                id="price"
                name="price"
                type="text"
                className="validate"
                value={form.price}
                onChange={changeHandler}
              />
              <label className="active" htmlFor="price">Ціна за одиницю</label>
            </div>
            <div className="input-field col s2">

              <input
                id="arrived"
                name="arrived"
                type="text"
                className="validate"
                value={form.arrived}
                onChange={changeHandler}
              />
              <label className="active" htmlFor="arrived">Надійшло</label>
            </div>
            <div className="input-field col s2">

              <input
                id="out"
                name="out"
                type="text"
                className="validate"
                value={form.out}
                onChange={changeHandler}
              />
              <label className="active" htmlFor="out">Вибуло</label>
            </div>
            <div className="input-field col s2">

              <input
                id="amount"
                name="amount"
                type="text"
                className="validate"
                value={form.amount}
                onChange={changeHandler}
              />
              <label className="active" htmlFor="amount">Становить</label>
            </div>
          </div>
          <div className={"row"}>
            <div className="input-field col s12">

              <input
                id="serialCode"
                name="serialCode"
                type="text"
                className="validate"
                value={form.serialCode}
                onChange={changeHandler}
              />
              <label className="active" htmlFor="serialCode">Серійник номер</label>
            </div>
          </div>
        </form>
        <div className={"row"}>
          <div className={"col offset-s5"}>
            <button disabled={loading} onClick={clickHandler} className="btn orange darken-1">Створити</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
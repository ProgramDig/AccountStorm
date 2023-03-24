import React, { useEffect } from "react";
import { useHttp } from "../hooks/useHttp.hook";
import { useMessage } from "../hooks/useMessage.hook";
import useAppSelector from "../hooks/useAppSelector.hook";
import useAppDispatch from "../hooks/useAppDispatch.hook";
import { removeItem } from "../redux/slices/itemSlice";

const ItemTable = ({ data }: any) => {
  const {error, request, clearError, loading} = useHttp();
  const token = useAppSelector(state => state.token.accessToken);
  const dispatch = useAppDispatch();
  const message = useMessage();

  useEffect(() => {
    message(error);
    clearError();
  }, [error, clearError, loading]);

  const deleteHandler = async (_id:string) => {
    const response:any = await request(
      "http://localhost:5000/api/item",
      "DELETE",
      {_id}, // id
      { "Authorization": `Bearer ${token}` },
    );
    if (response.message) {
      message(response.message);
      dispatch(removeItem({ _id }));
    }
  }

  return (
    <table className={"table"}>
      <thead className={"app-color"}>
      <tr>
        <th>№</th>
        <th>Дата запису</th>
        <th>Назва документу</th>
        <th>Номер документу</th>
        <th>Дата документу</th>
        <th>Постачальник</th>
        <th>Назва майна</th>
        <th>Код</th>
        <th>Одиниця виміру</th>
        <th>Ціна за одиницю</th>
        <th>Надійшло</th>
        <th>Вибуло</th>
        <th>Становить</th>
        <th>Заводський номер</th>
        <th>Дії</th>
      </tr>
      </thead>
      <tbody className={"text-color"}>
      {data.map((item: any, index: number) => {
        return (
          <tr key={index}>
            <td>{item.number}</td>
            <td>{item.dateOfItem}</td>
            <td>МОУ 1.12</td>
            <td>{item.numberOfDocument}</td>
            <td>{item.dateOfDocument}</td>
            <td>{item.provider}</td>
            <td>{item.name}</td>
            <td>{item.code}</td>
            <td>{item.unitOfMeasure}</td>
            <td>{item.price}</td>
            <td>{item.arrived}</td>
            <td>{item.out}</td>
            <td>{item.amount}</td>
            <td>{item.serialCode}</td>
            <td>
              <button onClick={(e) => deleteHandler(item._id)} className="btn red darken-2">
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                </div>
              </button>
            </td>
          </tr>
        );
      })
      }
      </tbody>
    </table>
  );
};

export default ItemTable;
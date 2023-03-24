import React, { useEffect } from "react";
import useAppSelector from "../hooks/useAppSelector.hook";
import { useHttp } from "../hooks/useHttp.hook";
import useAppDispatch from "../hooks/useAppDispatch.hook";
import { message } from "../../../src/utils/main";
import { setItems } from "../redux/slices/itemSlice";
import Chart from "../components/Chart";

const HomePage = () => {
  const data = useAppSelector(state => state.items.list);
  const token = useAppSelector(state => state.token.accessToken);
  const { loading, clearError, error, request } = useHttp();
  const dispatch = useAppDispatch();

  useEffect(() => {
    clearError();
    message(error);
  }, [error, clearError, loading]);

  useEffect(() => {
    if (data.length === 0) {
      loadDataHandler();
    } else {
    }
  }, []);


  const loadDataHandler = async () => {
    const data = await request("http://localhost:5000/api/item/", "GET", null, { "Authorization": `Bearer ${token}` });
    dispatch(setItems(data));
  };

  return (
    <div className={"container"}>
      <div className="row" style={{ minHeight: "65vh" }}>
        <div className="col s12">
          <h5 style={{ color: "#E1E1E1" }} className={"center-align"}>Таблиця</h5>
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
                </tr>
              );
            })
            }
            </tbody>
          </table>
        </div>
        <div className="col s12">
          <h5 style={{ color: "#E1E1E1" }} className={"center-align"}>Cхема активності</h5>
          <div style={{marginTop:30}}>
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
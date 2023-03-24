import React, { useEffect, useState } from "react";
import useAppSelector from "../hooks/useAppSelector.hook";
import { useHttp } from "../hooks/useHttp.hook";
import { message } from "../../../src/utils/main";
import useAppDispatch from "../hooks/useAppDispatch.hook";
import { setItems } from "../redux/slices/itemSlice";
import EmptyTable from "../components/EmptyTable";
import ItemTable from "../components/ItemTable";
import CreateItem from "../components/CreateItem";
import { generateDocx } from "../utils/docx";

const AdminPage = () => {
  const data = useAppSelector(state => state.items.list);
  const length: number | undefined = useAppSelector(state => state.items.list.length);
  const token = useAppSelector(state => state.token.accessToken);
  const { loading, clearError, error, request } = useHttp();
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);

  useEffect(() => {
    message(error);
    clearError();
  }, [error, clearError, loading]);

  useEffect(() => {
    if (data.length === 0) {
      loadDataHandler();
    }
  }, []);

  console.log(data);

  const loadDataHandler = async () => {
    const data = await request("http://localhost:5000/api/item/", "GET", null, { "Authorization": `Bearer ${token}` });
    dispatch(setItems(data));
  };

  return (
    <div>
      <div className="row">
        <div className="col s12" style={{ marginTop: 25 }}>
          <div className="col">
            <button disabled={loading} className={"btn orange waves-effect waves-light  darken-1"} onClick={loadDataHandler}>Оновити дані</button>
          </div>
          <div className="col">
            <button disabled={loading} className={"btn orange waves-effect waves-light  darken-1"} onClick={() => setPage(0)}>Таблиця</button>
          </div>
          <div className="col">
            <button disabled={loading} className={"btn orange waves-effect waves-light  darken-1"} onClick={() => setPage(1)}>Створити</button>
          </div>
          <div className="col">
            <button disabled={true} className={"btn orange waves-effect waves-light  darken-1"} onClick={generateDocx}>Перенести у word</button>
          </div>
        </div>

        <div className="col s12">
          {(page === 0) ?
            (data) ? (<ItemTable data={data} />) : (<EmptyTable />)
            :
            (<CreateItem length={length}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
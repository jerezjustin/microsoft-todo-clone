import { useNavigate } from "react-router";
import { useEffect } from "react";
import { DEFAULT_TASK_LIST } from "../constants/defaultLists";

const Home = () => {
    const navigate = useNavigate();
    const defaultTaskList = DEFAULT_TASK_LIST;

    useEffect(() => {
        navigate(`/tasks/${defaultTaskList}`);
    }, [navigate, defaultTaskList]);

    return <></>;
};

export default Home;

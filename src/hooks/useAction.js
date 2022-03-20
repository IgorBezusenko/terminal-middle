import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {allActionCreators} from "../store/reducers/all-action-creators";

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionCreators, dispatch)
}
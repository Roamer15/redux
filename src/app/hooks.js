import { useDispatch, useSelector } from "react-redux";

// Use these throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

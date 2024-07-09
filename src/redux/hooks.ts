import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store"; // Importieren des Root-Status und des Dispatch-Typs aus dem Redux Store

// Benutzerdefinierte Hook für den Redux-Dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Benutzerdefinierte Hook für den Redux-Selector, typisiert mit dem Root-Status
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

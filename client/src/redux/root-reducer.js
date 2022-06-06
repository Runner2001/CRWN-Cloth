import { combineReducers } from "redux";
import { dropDownReducer } from "./DropDown/dropdown.reducer";
import userReducer from "./User/user.reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { DirectoryReducer } from "./Directory/directory.reducer";
import { shopReducer } from "./shop/shop.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    dropDown: dropDownReducer,
    directory: DirectoryReducer,
    shop: shopReducer,
})


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['dropDown']
}

export default persistReducer(persistConfig, rootReducer);
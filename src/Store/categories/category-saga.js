import { takeLatest, call, put, all } from "redux-saga/effects";

import { getCategoriesAndDoc } from "../../utils/firebase/firebase-utils";

import { fetchCategoriesSucess, fetchCategoriesFaild } from "./category-action";

import { CATEGORIES_ACTION_TYPE } from "./category-type";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDoc, "categories");
    yield put(fetchCategoriesSucess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFaild(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}

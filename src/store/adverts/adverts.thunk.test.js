import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  getAdvertsSuccess,
  GET_ADVERTS_SUCCESS,
  GET_ADVERT_TAGS_SUCCESS,
} from "./adverts.actions";
import { fetchAdverts, getAdvertsTags } from "./adverts.thunk";

import MockAdapter from "axios-mock-adapter";
import axios from "../../utils/api/core";

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);
const mock = new MockAdapter(axios);
// const store = mockStore({});

describe("Async test in adverts", () => {
  //   beforeEach(() => {
  //     store.clearActions();
  //   });

  it("should get adverts tags", async () => {
    // mock.onGet("get", "/v1/adverts/tags", {}).reply(200 || 201, {
    //   response: ["lifestyle", "mobile", "motor", "work"],
    //   //   valid: true,
    //   //   data: ["lifestyle", "mobile", "motor", "work"],
    //   //   message: "ADVERTS_TAGS",
    // });

    const store = mockStore({});

    return store.dispatch(getAdvertsTags()).then(() => {
      const expectedActions = {
        type: GET_ADVERT_TAGS_SUCCESS,
        payload: ["lifestyle", "mobile", "motor", "work"],
      };
      const actions = store.getActions();
      //   console.log("actions ==>", actions);
      expect(actions[0]).toEqual(getAdvertsSuccess(expectedActions.payload));
    });
  });
});

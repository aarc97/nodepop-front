import { GET_ADVERTS_SUCCESS } from "./adverts.actions";
import advertsReducer from "./adverts.reducer";

jest.mock("../../utils/api/adverts.js");

describe("Auth reducers", () => {
  it("should handle a GET_ADVERTS action", () => {
    const initialState = {
      adverts: [],
      tags: [],
    };

    const advertsData = [
      {
        name: "Oscar",
        id: 1,
        photo: "",
        createdAt: "",
        price: 12,
        sale: false,
        tags: ["Work"],
      },
    ];

    const action = {
      type: GET_ADVERTS_SUCCESS,
      payload: advertsData,
    };

    const expectedState = {
      adverts: [...advertsData],
      tags: [],
    };
    expect(advertsReducer(initialState, action)).toEqual(expectedState);
  });
});

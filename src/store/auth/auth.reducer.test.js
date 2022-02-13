import { saveUser, SAVE_USER } from "./auth.actions";
import authReducer from "./auth.reducer";
import authState from "./auth.state";

describe("Auth reducers", () => {
  // Reducer
  it("should capture a dispatch to change the current user state  ", () => {
    const values = {
      email: "aarc97@gmail.com",
      token: "12dnasodaASDASdasH4d",
    };
    expect(authReducer(authState, saveUser(values)));
  });

  // Sync action
  it("Should create a SAVE_USER action  ", () => {
    const email = "aarc97@gmail.com";
    const token = "12dnasodaASDASdasH4d";
    const payload = {
      type: SAVE_USER,
      payload: { email, token },
    };
    expect(saveUser({ email, token })).toEqual(payload);
  });
});

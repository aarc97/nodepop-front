import { saveUser } from "./auth.actions";
import authReducer from "./auth.reducer";
import authState from "./auth.state";

describe("Auth reducers", () => {
  it("should capture a dispatch to change the current user state  ", () => {
    expect(
      authReducer(
        authState,
        saveUser({ email: "aarc97@gmail.com", token: "12dnasodaASDASdasH4d" })
      )
    );
  });
});

import { generateMessage } from "../generateMessage";

describe("generateMessage", () => {
  it.each([[62353535], [0], [123]])(
    "should generate the appropriate message for %s",
    (phoneNumber: number) => {
      expect(generateMessage(phoneNumber)).toStrictEqual(
        `[Click to message ${phoneNumber}](https://wa.me/${phoneNumber})`
      );
    }
  );
});

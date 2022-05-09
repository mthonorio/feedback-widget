import { SubmitFeedbackService } from "../SubmitFeedbackService";

// spies
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackService(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit Feedback", () => {
  it("should submit feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "test comment",
        screenshot: "data:image/png;base64,testimagestringlink",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "test comment",
        screenshot: "data:image/png;base64,testimagestringlink",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "PROBLEMA",
        comment: "",
        screenshot: "data:image/png;base64,testimagestringlink",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback with invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "PROBLEMA",
        comment: "test comment",
        screenshot: "testimage.jpg",
      })
    ).rejects.toThrow();
  });
});

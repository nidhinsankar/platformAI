import { Loader } from "../loader";
import { CardDescription } from "../ui/card";

export const Answers = () => {
  let loading = true;
  const answers = [
    { customer: [{ questions: [{ question: "", answered: "" }] }] },
  ];
  return (
    <div className="flex flex-col gap-5 mt-10">
      <Loader loading={loading}>
        {answers.map((answer) =>
          answer.customer.map(
            (customer) =>
              customer.questions.length > 0 &&
              customer.questions.map((question, key) => (
                <div key={key}>
                  <p>{question.question}</p>
                  <CardDescription>{question.answered}</CardDescription>
                </div>
              ))
          )
        )}
      </Loader>
    </div>
  );
};

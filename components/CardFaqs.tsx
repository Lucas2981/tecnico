import { FAQS } from "@/constants";

const CardFaqs = () => {
  return (
    <div className="padding-container max-container flex w-full flex-col  xl:px-40">
      {FAQS.map((question) => (
        <details
          key={question.title}
          className="group border-s-8 border-verde-10 bg-gris-20 p-6 [&_summary::-webkit-details-marker]:hidden mb-4">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-color-h5">
              {question.title}
            </h2>
            <span className="shrink-0 rounded-full bg-verde-10 p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-color-p">
            {question.description}
          </p>
        </details>
      ))}
    </div>
  );
};

export default CardFaqs;

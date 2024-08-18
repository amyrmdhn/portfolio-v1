import { useFormik } from "formik";
import validationScheme from "./validationSchema";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationScheme,
    onSubmit: (values, { resetForm }) => {
      console.log(`Berhasil kirim dengan email ${values.email}`);
      resetForm();
    },
  });

  return (
    <section id="contact" className="pt-36 pb-32 dark:bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-base font-semibold text-primary uppercase">
              Contact
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark  dark:text-white sm:text-4xl lg:text-5xl">
              Send Me Message
            </h2>
            <p className="text-md font-medium text-secondary md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="w-full lg:mx-auto lg:w-2/3">
            <div className="mb-8 w-full px-4">
              <label for="name" className="text-base font-bold text-primary">
                Name
              </label>
              <input
                type="text"
                id="name"
                className={`w-full rounded-md bg-slate-50 p-3 text-dark border border-indigo-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="mt-2 text-sm text-red-500">
                  {formik.errors.name}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-8 w-full px-4">
              <label for="email" className="text-base font-bold text-primary">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md bg-slate-50 p-3 text-dark border border-indigo-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="mt-2 text-sm text-red-500">
                  {formik.errors.email}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-8 w-full px-4">
              <label for="message" className="text-base font-bold text-primary">
                Message
              </label>
              <textarea
                type="email"
                id="email"
                className="h-32 w-full rounded-md bg-slate-50 p-3 text-dark border border-indigo-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary "
                {...formik.getFieldProps("message")}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <p className="mt-2 text-sm text-red-500">
                  {formik.errors.message}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="w-full px-4">
              <button className="w-full rounded-xl bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import { useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "@/components/button/button";
import ModalContainer from "@/components/modal/modalContainer";
import { useRouter } from "next/router";
const ActiveAccount = () => {
  const ResetModal = ({ closeModal }) => {
    const [nextView, setNextView] = useState(null);

    return (
      <div className="bg-white p-6 gap-3 flex flex-col self-center justify-self-center w-[90%] md:w-1/2 lg:w-1/3  ">
        <div className="flex justify-between">
          <span className="font-semibold text-xl ">Verify its you</span>

          <button onClick={closeModal}>
            {" "}
            <img src="/assets/svgs/close icon.svg" alt="" />{" "}
          </button>
        </div>
        {!nextView ? (
          <>
            <div className="flex mt-4 flex-col gap-1">
              <span>Super Admin Password</span>
              <p>We just want to be sure its you suspending the account.</p>
              <div>
                <input
                  type="password"
                  className="w-full"
                  placeholder="Enter Password"
                />
              </div>
            </div>

            <Button
              variant="black"
              onClick={() => {
                setNextView(true);
              }}
              customClassName=" flex self-end  justify-center w-full md:w-auto text-white"
              text="Reset Password"
            />
          </>
        ) : (
          <div className="flex flex-col gap-2 ">
            <span className="text-header-gray">
              Are you sure you want to reset the password for this account?
            </span>
            <div className="flex flex-col md:flex-row justify-between gap-2  ">
              <button
                className="w-full bg-black text-white rounded px-6 py-4 p-0  "
                onClick={() => {
                  setNextView(false);
                }}
              >
                {" "}
                Go Ahead
              </button>
              <button
                onClick={() => {
                  setNextView(false);
                }}
                className="rounded border bg-white px-6 py-4 p-0 w-full  "
              >
                {" "}
                Changed My Mind
              </button>
            </div>
          </div>
        )}{" "}
      </div>
    );
  };
  const SuspendModal = ({ closeModal }) => {
    const [nextView, setNextView] = useState(false);
    return (
      <div className="bg-white p-6 gap-3 flex flex-col self-center justify-self-center w-[90%] md:w-1/2 lg:w-1/3  ">
        <div className="flex justify-between">
          <span className="font-semibold text-xl ">Suspend Account</span>

          <button onClick={closeModal}>
            {" "}
            <img src="/assets/svgs/close icon.svg" alt="" />{" "}
          </button>
        </div>
        {!nextView ? (
          <>
            <div className="flex mt-4 flex-col gap-1">
              <p>Reason for Suspension</p>
              <div>
                <textarea
                  className="w-full"
                  placeholder="Indicate the reason for suspension of this account"
                />
              </div>
            </div>
            <Button
              variant="white"
              onClick={() => {
                setNextView(true);
              }}
              customClassName=" flex self-end border justify-center w-full md:w-auto "
              text="Next"
            />
          </>
        ) : (
          <div className="flex flex-col gap-2">
            <p>
              Are you sure you want to suspend this account? By suspending this
              account, this admin will no longer be able to perform any
              administrative tasks or access any system functionality.
            </p>
            <div className="flex flex-col gap-2 ">
              <span className="text-header-gray">
                This action is irreversible and the account will have to be
                reactivated manually.
              </span>
              <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0 ">
                <button
                  className="w-full bg-black text-white rounded px-6 py-4 p-0 md:w-auto "
                  onClick={() => {
                    setNextView(false);
                  }}
                >
                  {" "}
                  Suspend Account
                </button>
                <button
                  onClick={() => {
                    setNextView(false);
                  }}
                  className="rounded border bg-white px-6 py-4 p-0 w-full md:w-auto "
                >
                  {" "}
                  Changed My Mind
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  const DeleteModal = ({ closeModal }) => {
    const [nextView, setNextView] = useState(null);

    return (
      <div className="bg-white p-6 gap-3 flex flex-col self-center justify-self-center w-[90%] md:w-1/2 lg:w-1/3  ">
        <div className="flex justify-between">
          <span className="font-semibold text-xl ">Delete Account</span>

          <button onClick={closeModal}>
            {" "}
            <img src="/assets/svgs/close icon.svg" alt="" />{" "}
          </button>
        </div>
        {!nextView ? (
          <>
            <div className="flex mt-4 flex-col gap-3">
              <span>
                Are you sure you want to delete this account? Deleting this
                account will permanently remove it from the system. All
                associated data, permissions, and settings will be irreversibly
                lost.
              </span>
              <p className="text-header-gray">
                This action can not be reversed at all.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-2  ">
              <button
                className="w-full bg-btnRed text-white rounded px-6 py-4 p-0  "
                onClick={() => {
                  setNextView(true);
                }}
              >
                {" "}
                Go Ahead
              </button>
              <button
                onClick={() => {
                  setNextView(false);
                }}
                className="rounded border bg-white px-6 py-4 p-0 w-full  "
              >
                {" "}
                Changed My Mind
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex mt-4 flex-col gap-1">
              <span>Super Admin Password</span>
              <p>We just want to be sure its you deleting the account.</p>
              <div>
                <input
                  type="password"
                  className="rounded w-full"
                  placeholder="Enter Password"
                />
              </div>
            </div>

            <Button
              variant="black"
              onClick={() => {
                setNextView(true);
              }}
              customClassName=" flex self-end bg-btnRed justify-center w-full md:w-auto text-white"
              text="Delete Account"
            />
          </>
        )}{" "}
      </div>
    );
  };

  const [modalInView, setModalInView] = useState(null);

  const router = useRouter();
  const status = useSelector((state) => state.superAdmin.adminStatus);

  return (
    <main className=" flex flex-col relative gap-8 px-5 py-8">
      <div className="flex gap-4">
        <button className="  px-1" onClick={() => router.back()}>
          <img src="/assets/svgs/arrow-left.svg" className="h-[20px]" alt="" />
        </button>
        <span>
          {" "}
          {status} Accounts{" "}
          <span className="font-bold"> / Admin {router.query.id} </span>{" "}
        </span>
      </div>
      <section className="flex md:flex-col flex-col-reverse gap-6">
        {status === "Active" ? (
          <div className="flex flex-col md:flex-row gap-4">
            <Button
              variant="black"
              customClassName="w-full md:w-auto "
              onClick={() => {
                setModalInView("ResetModal");
              }}
              text="Reset Password"
            />
            <Button
              variant="white"
              onClick={() => {
                setModalInView("SuspendModal");
              }}
              text="Suspend Account"
              customClassName="border w-full md:w-auto "
            />
          </div>
        ) : status === "Suspended" ? (
          <div className="flex md:min-h-[30vh] h-fit flex-col gap-8">
            <Button
              variant="black"
              customClassName="w-full md:w-fit "
              onClick={() => {
                setModalInView("ResetModal");
              }}
              text="Reactivate Account"
            />

            <div className="absolute w-full flex-col gap-2 py-3 px-4 bg-[#F5F5F5] flex top-[5em] md:mt-[5em] inset-x-0  ">
              <span className="leading font-semibold text-md">
                {" "}
                Reason for Suspension{" "}
              </span>
              <span>
                {" "}
                This admin was reluctant to perform his duties. He was
                nonchalant towards work hence got penalized for his actions.
              </span>
            </div>
          </div>
        ) : null}

        <div className="  flex flex-col  md:grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <article className="flex flex-col gap-1">
              <h1 className="font-bold text-2xl">Personal Information</h1>

              <span> Username </span>
              <span> Full Name </span>
              <span> Email Address</span>
            </article>
            <article>
              <h1 className="font-bold text-2xl">Roles</h1>
              <p>
                To ensure the Glamour and Luxury Page is well updated regularly
                to meet clients’ satisfaction. To regularly fill the page with
                trending themes and styles of customer’s satisfaction.
              </p>
            </article>

            <div>
              <h1 className="font-bold text-2xl">Account</h1>

              <span
                onClick={() => setModalInView("DeleteModal")}
                className="text-red-700 underline cursor-pointer"
              >
                Delete Account
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl">Recent Activity</h1>

            <span>Yesterday</span>

            <div>
              <h2 className="font-semibold">
                Uploaded a photo to Glamour and Luxury Page
              </h2>
              <span>Jan 23rd , 8;19 pm</span>
            </div>
            <div>
              <h2 className="font-semibold">
                Uploaded a photo to Glamour and Luxury Page
              </h2>
              <span>Jan 23rd , 8;19 pm</span>
            </div>
            <div>
              <h2 className="font-semibold">
                Uploaded a photo to Glamour and Luxury Page
              </h2>
              <span>Jan 23rd , 8;19 pm</span>
            </div>
          </div>
        </div>
      </section>

      {modalInView === "SuspendModal" ? (
        <ModalContainer
          content={<SuspendModal closeModal={() => setModalInView(null)} />}
        />
      ) : modalInView === "ResetModal" ? (
        <ModalContainer
          content={<ResetModal closeModal={() => setModalInView(null)} />}
        />
      ) : modalInView === "DeleteModal" ? (
        <ModalContainer
          content={<DeleteModal closeModal={() => setModalInView(null)} />}
        />
      ) : null}
    </main>
  );
};

export default ActiveAccount;

import React from "react";

export default function TaskCard({ toDo }) {
  return (
    <div className="">
      <div className="max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center ">
        <a href="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {toDo.description}
          </h5>
        </a>
        <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
          {toDo.date}
        </p>
        <p
          className={`mb-3 font-semibold ${
            toDo.completed === 1 ? "text-green-600" : "text-red-600"
          } dark:text-gray-400 `}
        >
          {toDo.completed === 1 ? "Completed" : "To Complete"}
        </p>
        <div>
          <a
            href="/"
            className="inline-flex mr-2 items-center px-3 py-2 text-sm font-medium text-center text-black bg-yellow-300 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
          </a>
          <a
            href="/"
            className="inline-flex mr-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Delete
          </a>
          {toDo.completed === 0 ? (
            <a
              href="/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Complete
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

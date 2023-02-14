import { useMemo, Fragment, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { getArticles } from "../../utils/api";

const optionsSort = [
  { name: "Date", value: "created_at" },
  { name: "Votes", value: "votes" },
  { name: "Comments", value: "comment_count" },
];

const optionsOrder = [
  { name: "Descending", value: "desc" },
  { name: "Ascending", value: "asc" },
];

export default function Sort({
  setSort,
  setOrder,
  setData,
  setPage,
  setHasMore,
}) {
  const [selectedOrder, setSelectedOrder] = useState(optionsOrder[0]);
  const [selectedSort, setSelectedSort] = useState(optionsSort[0]);
  const { topic } = useParams();

  const getData = useMemo(
    () => async () => {
      const data = await getArticles(
        topic,
        selectedSort["value"],
        selectedOrder["value"]
      );
      setData(data.data.articles);
      setSort(selectedSort["value"]);
      setOrder(selectedOrder["value"]);
      setPage(1);
      setHasMore(true);
    },
    [topic, selectedSort, selectedOrder, setData, setSort, setOrder]
  );

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="text-xs fixed text-white z-20 md:right-[50%] top-0 w-24 flex flex-row">
      <Listbox
        value={selectedSort}
        onChange={(value) => {
          setSelectedSort(value);
        }}
      >
        <div className="float bg-black bg-opacity-20 px-2 rounded-lg w-36 mt-1">
          <Listbox.Button className="hover:cursor-pointer bg-black bg-opacity-0 text-right relative cursor-default rounded-lg py-2 pr-6 shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-xs">
            <span className="block truncate">{selectedSort.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
              <ChevronUpDownIcon
                className="h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className=" text-white text-left absolute w-full mt-1 max-h-60 overflow-auto rounded-md bg-black bg-opacity-75 py-1 text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {optionsSort.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pr-4 ${
                      active ? "bg-violet-100 text-violet-900" : "text-white"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block pl-5 truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center text-violet-600"></span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <Listbox
        value={selectedOrder}
        onChange={(value) => {
          setSelectedOrder(value);
        }}
      >
        <div className="float bg-black bg-opacity-20 px-2 rounded-lg w-36 mt-1">
          <Listbox.Button className="hover:cursor-pointer bg-black bg-opacity-0 text-right relative cursor-default rounded-lg py-2 pr-6 shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-xs">
            <span className="block truncate">{selectedOrder.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
              <ChevronUpDownIcon
                className="h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="text-white text-left absolute w-full mt-1 max-h-60 overflow-auto rounded-md bg-black bg-opacity-75 py-1 text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {optionsOrder.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 ${
                      active ? "bg-violet-100 text-violet-900" : "text-white"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block pl-5 truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center text-violet-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

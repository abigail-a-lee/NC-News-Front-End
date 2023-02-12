import { Fragment, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { getArticles } from "../../utils/api";

const options = [
  { name: "Date", value: "created_at" },
  { name: "Votes", value: "votes" },
  { name: "Comments", value: "comment_count" },
];

export default function Sort({ setData }) {
  const [selected, setSelected] = useState(options[0]);

  useEffect(() => {
    const getData = async () => {
      const data = await getArticles("all", selected["value"]);
      setData(data.data.articles);
    };

    getData();
  }, [selected]);

  return (
    <div className="text-xs fixed text-white z-20 right-20 md:right-0 top-0 w-24 flex flex-row">
      <Listbox
        value={selected}
        onChange={(value) => {
          setSelected(value);
        }}
      >
        <div className="float w-36 mt-1">
          <Listbox.Button className="cursor-pointer text-right relative cursor-default rounded-lg py-2 pr-6 shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-xs">
            <span className="block truncate">{selected.name}</span>
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
              {options.map((option, optionIdx) => (
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
    </div>
  );
}

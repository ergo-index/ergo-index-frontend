/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { classNames } from '../../../utils/tailwind'
import { toInteger } from 'lodash'

const rowOptions = [
    { id: 1, name: '5' },
    { id: 2, name: '10' },
    { id: 3, name: '15' },
    { id: 4, name: '25' },
    { id: 5, name: '50' },
]


export const SelectMenu = ({ setRowsPerPage }: { setRowsPerPage: (x: number) => void }) => {
    const [selected, setSelected] = useState(rowOptions[0])
    const onCheckboxChange = (val: {
        id: number;
        name: string;
    }) => {
        setSelected(val)
        setRowsPerPage(toInteger(val.name))
    }
    return (
        <Listbox value={selected} onChange={onCheckboxChange}>
            {({ open }) => (
                <>
                    <div className="mt-1 relative inline-block">
                        <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <span className="block">{selected.name}</span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>


                        <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                            {rowOptions.map((rowOption) => (
                                <Listbox.Option
                                    key={rowOption.id}
                                    className={({ active }) =>
                                        classNames(
                                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                            'cursor-default select-none relative py-2 pl-3 pr-9'
                                        )
                                    }
                                    value={rowOption}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block')}>
                                                {rowOption.name}
                                            </span>

                                            {selected ? (
                                                <span
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-indigo-600',
                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </div>
                </>
            )}
        </Listbox>
    )
}
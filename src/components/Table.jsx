import React from 'react';

const Table = () => {
  const data = [
    { id: 1, name: "Fоrtepiаnо", age: "6-9", duration: "7 yil" },
    { id: 2, name: "Tоrli chоlg‘ulаr", age: "6-9", duration: "7 yil" },
    { id: 3, name: "Xаlq chоlg‘ulаri", age: "6-11", duration: "5 yil" },
    { id: 4, name: "Estrada xonandaligi", age: "6-11", duration: "5 yil" },
    {
      id: 5,
      name: "Estrada cholg'u ijrochiligi: fortepiano, torli cholg'ular, gitara",
      age: "6-9, 6-11",
      duration: "7 yil, 5 yil",
    },
    { id: 6, name: "Хоreоgrаfiya", age: "6-11", duration: "5 yil" },
    { id: 7, name: "Tаsviriy sаn’аt", age: "6-11", duration: "5 yil" },
  ];

  return (
    <div className="overflow-x-auto px-2 sm:px-4 md:px-8 lg:px-32">
      <table className="min-w-full divide-y divide-gray-200 border border-black rounded-lg shadow">
        <thead className="bg-sky-600">
          <tr>
            <th className="px-2 py-2 text-left text-xs sm:text-sm md:text-base font-medium text-white">№</th>
            <th className="px-2 py-2 text-left text-xs sm:text-sm md:text-base font-medium text-white">Ta'lim yo'nalishi</th>
            <th className="px-2 py-2 text-left text-xs sm:text-sm md:text-base font-medium text-white">Qabul yoshi</th>
            <th className="px-2 py-2 text-left text-xs sm:text-sm md:text-base font-medium text-white">O'tish muddati</th>
          </tr>
        </thead>
        <tbody className="bg-[#f1f1f1] divide-y divide-black">
          <tr>
            <th colSpan={4} className="text-center p-2 bg-gray-200 text-xs sm:text-base">Musiqа yo‘nаlishi</th>
          </tr>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <tr>
                <td className="px-2 py-2">{item.id}</td>
                <td className="px-2 py-2 break-words">{item.name}</td>
                <td className="px-2 py-2">{item.age}</td>
                <td className="px-2 py-2">{item.duration}</td>
              </tr>
              {item.id === 5 && (
                <tr>
                  <th colSpan={4} className="text-center p-2 bg-gray-200 text-xs sm:text-base">San’at yo‘nаlishi</th>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

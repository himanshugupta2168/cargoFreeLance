import React from "react";

const data = [
  {
    sr: "09876546",
    from: "Pensylvenia",
    to: "Pensylvenia",
    booking: "May 25, 2024",
    status: "Arrived",
  },
  {
    sr: "09876546",
    from: "Pensylvenia",
    to: "Pensylvenia",
    booking: "May 25, 2024",
    status: "On Way",
  },
  {
    sr: "09876546",
    from: "Pensylvenia",
    to: "Pensylvenia",
    booking: "May 25, 2024",
    status: "On Way",
  },
  {
    sr: "09876546",
    from: "Pensylvenia",
    to: "Pensylvenia",
    booking: "May 25, 2024",
    status: "On Way",
  },
  {
    sr: "09876546",
    from: "Pensylvenia",
    to: "Pensylvenia",
    booking: "May 25, 2024",
    status: "On Way",
  },
  {
    sr: "09876546",
    from: "Pensylvenia",
    to: "Pensylvenia",
    booking: "May 25, 2024",
    status: "On Way",
  },
];

const Shipment = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Welcome Back!</h2>
      {/* main continers */}
      <div className="flex gap-4 h-[130px] mt-10">
        <div className="flex-1  flex flex-col gap-2 items-center justify-center rounded-xl shadow-custom-light bg-[#fdf1f1]">
          <h1 className="text-3xl font-bold">35</h1>
          <p className="text-gray-500 text-xs font-semibold">
            Total packages shipped
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-2 items-center justify-center rounded-xl shadow-custom-light bg-[#f5f5fe]">
          <h1 className="text-3xl font-bold">3</h1>
          <p className="text-gray-500 text-xs font-semibold">
            Pending Packages
          </p>
        </div>
        <div className="flex-1  flex flex-col gap-2 items-center justify-center rounded-xl shadow-custom-light bg-[#f5fff7]">
          <h1 className="text-3xl font-bold">50</h1>
          <p className="text-gray-500 text-xs font-semibold">Requests</p>
        </div>
        <div className="flex-1  flex flex-col gap-2 items-center justify-center rounded-xl shadow-custom-light bg-[#fef7ec]">
          <h1 className="text-3xl font-bold">2</h1>
          <p className="text-gray-500 text-xs font-semibold">
            Cancelled Packages
          </p>
        </div>
      </div>

      {/* Shipment main box  */}
      <div className=" my-20 pb-20 border rounded-xl shadow-custom-light ">
        <h1 className="text-xl font-semibold  py-6 px-4 border-b  w-2/3">
          Shipment History
        </h1>
        <div className="my-6">
          <h3 className="font-bold text-lg px-8">Track Shipments</h3>
          <table className="w-full table-auto border-collapse my-6">
            <thead>
              <tr>
                <th className="w-1/5 px-4 py-2">Sr. Number</th>
                <th className="w-1/5 px-4 py-2 ">From</th>
                <th className="w-1/5 px-4 py-2">To</th>
                <th className="w-1/5 px-4 py-2 ">Booking Date</th>
                <th className="w-1/5 px-4 py-2 ">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i} className="w-full ">
                  <td className="w-1/5 px-4 pt-6 text-center text-xs">
                    {d.sr}
                  </td>
                  <td className="w-1/5 px-4 pt-6 text-center text-xs">
                    {d.from}
                  </td>
                  <td className="w-1/5 px-4 pt-6 text-center text-xs">
                    {d.to}
                  </td>
                  <td className="w-1/5 px-4 pt-6 text-center text-xs">
                    {d.booking}
                  </td>
                  <td className="w-1/5  pt-6 text-center text-xs">
                    <div className=" w-full h-full flex justify-center">
                            <h2 className={`border px-4 py-1 rounded-lg ${d.status==="Arrived"?"text-green-400 border-green-400":"text-[#6059c3] border-[#6059c3]"}`}>{d.status}</h2>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* bordr bottom of table  */}
        <div className="w-2/3 h-[1px] bg-gray-300"/>

        <div className="my-6">
        <h1 className="text-xl font-semibold  py-6 px-4  w-2/3">
          Shipment History
        </h1>
        <p className="px-4 text-xs text-gray-400">There are no records to display</p>
        </div>
      </div>
    </div>
  );
};

export default Shipment;

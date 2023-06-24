import AreaChartComponent from "./AreaChartComponent";

const Section2 = () => {
  return (
    <section className="">
      <section className="flex gap-2 overflow-x-auto sm:overflow-x-hidden pointer-events-none">
        <div className="border px-6 py-2">
          <h4 className="font-extrabold text-lg flex-nowrap whitespace-nowrap">
            New Customers
          </h4>
          <div className="flex justify-between items-center">
            <span className="text-lg">54</span>
            <span className="sm:text-lg bg-green-600 text-white p-1 rounded-lg">
              +18.7%
            </span>
          </div>
        </div>
        <div className="border px-6 py-2">
          <h4 className="font-extrabold text-lg">Invoices Overduce</h4>
          <div className="flex justify-between items-center">
            <span>6</span>
            <span className="text-lg bg-green-600 text-white px-2 py-1 rounded-lg">
              +2.4%
            </span>
          </div>
        </div>
        <div className="border px-6 py-2">
          <h4 className="font-extrabold text-lg">Invoices Overduce</h4>
          <div className="flex justify-between items-center">
            <span>6</span>
            <span className="text-lg bg-green-600 text-white px-2 py-1 rounded-lg">
              +2.4%
            </span>
          </div>
        </div>
        <div className="border px-6 py-2">
          <h4 className="font-extrabold text-lg">Invoices Overduce</h4>
          <div className="flex justify-between items-center">
            <span>6</span>
            <span className="text-lg bg-green-600 text-white px-2 py-1 rounded-lg">
              +2.4%
            </span>
          </div>
        </div>
        <div className="border px-6 py-2">
          <h4 className="font-extrabold text-lg">Invoices Overduce</h4>
          <div className="flex justify-between items-center">
            <span>6</span>
            <span className="text-lg bg-green-600 text-white px-2 py-1 rounded-lg">
              +2.4%
            </span>
          </div>
        </div>
        <div className="border px-6 py-2">
          <h4 className="font-extrabold text-lg">Invoices Overduce</h4>
          <div className="flex justify-between items-center">
            <span>6</span>
            <span className="text-lg bg-green-600 text-white px-2 py-1 rounded-lg">
              +2.4%
            </span>
          </div>
        </div>
      </section>
      <div className="col-span-2 row-span-2 rounded-lg py-2">
        <AreaChartComponent />
      </div>
    </section>
  );
};

export default Section2;

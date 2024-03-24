import Triangle from "../../icons/Shape/Triangle.jsx"
import MiniChartRed from "../../../assets/logo/MiniChartRed.svg"

const DashboardOverviewCardUp = () => {
    return (
        <div className="p-6 max-w-max min-w-min h-auto rounded-xl bg-white border-2 items-center">
            <div className="flex items-center gap-2">
                <div className="opacity-70">Số lượng lead</div>
                <Triangle className="pl-2 fill-red-500 size-8 rotate-180" />
                <div className=" text-red-500">3.1%</div>
            </div>
            <div className=" grid gap-14 grid-cols-2 items-center ">
                <div className="pt-2 label-large text-2xl flex">9.901</div>
                <div className=" opacity-80">
                    <img
                        src={MiniChartRed}
                        alt="MiniChartRed" />
                </div>
            </div>
        </div>
    )
}

export default DashboardOverviewCardUp






// export interface StatsProps {
//     prop: string
// }

export default function Stats() {

    return (
        <>
            <div className="px-6 pt-8 pb-6 bg-[#13161D] border border-[#232723] rounded-2xl flex items-center justify-between">

                <div className="space-y-1.5 w-full">
                    <p className="text-dim text-xs">Exercises</p>
                    <h1 className="text-4xl font-heading font-bold text-brand">0</h1>
                </div>

               

                <div className="space-y-1.5 w-full px-8 border-x border-[#232732]">
                    <p className="text-dim text-xs">Minutes</p>
                    <h1 className="text-4xl font-heading font-bold">0</h1>
                </div>


              

                <div className="space-y-1.5 w-full pl-8">
                    <p className="text-dim text-xs">Calories</p>
                    <h1 className="text-4xl font-heading font-bold">0</h1>
                </div>

            </div>
        </>
    )
}
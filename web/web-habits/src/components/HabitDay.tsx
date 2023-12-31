import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";
import { Check } from "phosphor-react";


interface HabitDayProps {
    amount:number
    completed :number 
}

export function HabitDay({completed,amount}:HabitDayProps)
{
    //return (<div className="bg-zinc-900 w-10 h-10 text-white rounded m-2 text-center flex items-center justify-center"></div>)
   
    const completedPercentage = Math.round( (completed / amount ) * 100 )
    return (
   
    <Popover.Root>
        <Popover.Trigger className={clsx('w-10 h-10 border-1  rounded-lg',{
            ' bg-zinc-900  border-zinc-800': completedPercentage === 0,
            ' bg-violet-900  border-violet-800':completedPercentage >  0  && completedPercentage < 20, 
            ' bg-violet-800  border-violet-700':completedPercentage >=  20  && completedPercentage < 40, 
            ' bg-violet-700  border-violet-600':completedPercentage >=  40  && completedPercentage < 60, 
            ' bg-violet-600  border-violet-500':completedPercentage >=  60  && completedPercentage < 80, 
            ' bg-violet-500  border-violet-400':completedPercentage >=  80 ,

        })}
        />
        <Popover.Portal>
            <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
                <span className="font-semibold text-zinc-400 "></span>
                <span className="mt-1 font-extrabold leading-tight text-3xl"></span>

                <ProgressBar progress={34}/>

                <div className="mt-6 flex flex-col gap-3"></div>

                <CheckBox.Root className="flex items-center gap-3 group:">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data[state=cheked]:bg-green-500 group-data[state=cheked]:border-green-500">
                    <CheckBox.Indicator>
                        <Check size={20} className="text-white"></Check>
                    </CheckBox.Indicator>
                    </div>
                    <span className="font-semobold text-xl text-white leading-tight group-data[state=cheked]:line-through group-data[state=cheked]:text-zinc-400"></span>
                </CheckBox.Root>

                <Popover.Arrow  height={8} width={16} className="fill-zinc-900"/>

            </Popover.Content>
        </Popover.Portal>
    </Popover.Root>
 
   )
}
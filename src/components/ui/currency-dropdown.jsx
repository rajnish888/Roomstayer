import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import USD from '../../../public/images/USD.svg'
import { FaAngleDown } from "react-icons/fa6";



export default function CurrencyDropdown() {
    const [selectedCurrency, setSelectedCurrency] = useState({
        code: "USD",
        flag: USD,
    });

    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
    };

    const currencies = [
        { code: "USD", flag: USD },
 
    ];

    return (
        <div className="flex items-center space-x-2">
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-lg font-semibold focus:border-0">
                    <Image
                        src={selectedCurrency.flag}
                        alt={`${selectedCurrency.code} Flag`}
                        width={28}
                        height={28}
                    />
                    {selectedCurrency.code}
                    <FaAngleDown 
                        width={24}
                        height={24}
                    />

                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="min-w-[8rem]">
                    {currencies.map((currency) => (
                        <DropdownMenuItem
                            key={currency.code}
                            onClick={() => handleCurrencyChange(currency)}
                            className="flex items-center font-semibold"
                        >
                            <Image
                                src={currency.flag}
                                alt={`${currency.code} Flag`}
                                width={24}
                                height={24}
                            />
                            {currency.code}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

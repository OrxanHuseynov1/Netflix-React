import languageSelect from '../../assets/icons/language-select.svg'


// const CustomSelect = ({selectedOption,setSelectedOption,options,logo}) => {
//   return (
//     <div className={`border-[1px] border-zinc-400 focus:outline-white relative bg-zinc-800 ${logo ? "h-full w-[135px]" : "h-33[px] w-[110px]"} rounded-[4px]`}>
//         {logo && logo}
//         <select onChange={(e) => {setSelectedOption(e.target.value)}}
//             className='w-full h-full opacity-0 hover:cursor-pointer'>
//             {options?.map(item => <option value={item}>{item}</option>)}
//         </select>
//         <p className={`absolute top-1 ${logo ? "left-10" : "left-2"} text-white pointer-events-none`}>{selectedOption}</p>
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="CaretDownSmall" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z" fill="currentColor"></path></svg>
//     </div>
//   )
// }

// export default CustomSelect


const CustomSelect = ({ 
  selectedOption, 
  setSelectedOption, 
  options = [], 
  logo 
}) => {
  return (
    <div 
      className={`relative border border-zinc-400 bg-zinc-800 rounded-[4px] ${logo ? "h-full w-[135px]" : "h-[33px] w-[110px]"}`}
    >
      {/* Logo Varsa Göster */}
      {logo && <div className="absolute top-2 left-2">{logo}</div>}

      {/* Select Kutusu */}
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      >
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* Seçilen Seçenek */}
      <p 
        className={`absolute top-1 text-white font-roboto text-[16px] left-0 pointer-events-none ${
          logo ? "left-10" : "left-2"
        }`}
      >
        {selectedOption || "Select"}
      </p>

      {/* Aşağı Ok İkonu */}
      <img 
        src={languageSelect} 
        alt="Dropdown Icon" 
        className="absolute top-1/2 right-2 -translate-y-1/2 w-4 h-4 pointer-events-none" 
      />
    </div>
  );
};

export default CustomSelect;

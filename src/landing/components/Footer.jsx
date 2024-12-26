import {useState} from 'react'
import CustomSelect from './CustomSelect';
import language from '../../assets/icons/language.svg'

const Footer = () => {
    const [selectedLanguage,setSelectedLanguage] = useState("English")

    const Languages = ["English","Russian"]

    const items = [
        { title: "FAQ", link: "https://help.netflix.com/tr/node/412" },
        { title: "Help Center", link: "https://help.netflix.com/tr" },
        { title: "Account", link: "//Sign" },
        { title: "Media Center", link: "https://media.netflix.com/tr/" },
        { title: "Investor Relations", link: "https://ir.netflix.net/ir-overview/profile/default.aspx" },
        { title: "Jobs", link: "https://jobs.netflix.com/" },
        { title: "Ways to Watch", link: "https://help.netflix.com/tr/node/14361" },
        { title: "Terms of Use", link: "https://help.netflix.com/legal/termsofuse" },
        { title: "Privacy", link: "https://help.netflix.com/legal/privacy" },
        { title: "Cookie Preferences", link: "//" },
        { title: "Corporate Information", link: "https://help.netflix.com/tr/node/134094" },
        { title: "Contact Us", link: "https://help.netflix.com/tr/contactus" },
        { title: "Speed Test", link: "https://fast.com/tr/" },
        { title: "Legal Notices", link: "https://help.netflix.com/legal/notices" },
        { title: "Only on Netflix", link: "https://www.netflix.com/az/browse/genre/839338" },
    ];
    return (

        <div className="mt-16">
            <a className="text-[16px] text-[#B3B3B3] font-roboto underline mb-4 block">Questions? Contact us.</a>
            <div className="grid grid-cols-4 gap-4 text-gray-400">
                {items.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-roboto text-[#B3B3B3] underline text-[14px] leading-[21px] "
                    >
                        {item.title}
                    </a>
                ))}
            </div>
            <div className='flex items-center gap-2 mt-14 h-[33px]'>
                <CustomSelect selectedOption={selectedLanguage} setSelectedOption={setSelectedLanguage} options={Languages} logo={<img src={language}></img>}/>

            </div>
            <p className="text-[14px] bg-black text-white mt-8">
                Netflix Azerbaijan
            </p>
        </div>
    )
}

export default Footer
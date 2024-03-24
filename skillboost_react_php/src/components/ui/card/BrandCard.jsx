import SkillboostLogo from '../../../assets/logo/SkillboostLogo.svg';
const BrandCard = () => {
    return(
        <nav>
            <div className='w-max p-2 relative flex max-w-max h-auto flex-row rounded-xl bg-white border-2' >
                <img 
                    src={SkillboostLogo}
                    width={114}
                    height={114} 
                    alt="logo" />
            </div>
        </nav>
    )
}
export default BrandCard
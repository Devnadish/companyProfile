import SkillBox from '@/pagecomponent/about/SkillBox';
import { FiFigma } from '@react-icons/all-files/fi/FiFigma';
import Title from '@/components/shared/title/Title';
import { getDictionary } from '@/lib/dictionary';
import { uiux } from './utl';
import { sectionStyle } from '@/styles/homeSectionStyle';

async function UiSection({ lang }) {
    const {
        page: {
            about: { skills },
        },
    } = await getDictionary(lang);
    const baseUrl = '/assets/about/';
    const data = uiux();
    return (
        <>
            <div className={sectionStyle}>
                <Title
                    title={skills.uiux}
                    icon={<FiFigma className='text-3xl text-red-600' />}
                />
                <div className='mt-4 flex w-auto justify-evenly gap-4'>
                    {data.data.map((skill) => {
                        return (
                            <SkillBox
                                key={skill.id}
                                imgz={baseUrl + skill.imgx}
                                txt={skill.pres}
                                colorx={['bg-blue-600']}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default UiSection;

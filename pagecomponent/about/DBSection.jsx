import { FaServer } from '@react-icons/all-files/fa/FaServer';
import Title from '@/components/shared/title/Title';
import { getDictionary } from '@/lib/dictionary';
import { dataBase } from './utl';
import { sectionStyle } from '@/styles/homeSectionStyle';
import SkillBox from '@/pagecomponent/about/SkillBox';
async function DBSection({ lang }) {
    const {
        page: {
            about: { skills },
        },
    } = await getDictionary(lang);
    const baseUrl = '/assets/about/';
    const data = dataBase();
    return (
        <>
            <div className={sectionStyle}>
                <Title
                    title={skills.database}
                    icon={<FaServer className='text-3xl text-green-600' />}
                />
                <div className='mt-4 flex w-auto justify-evenly gap-4'>
                    {data.data.map((skill) => {
                        return (
                            <SkillBox
                                key={skill.id}
                                imgz={baseUrl + skill.imgx}
                                txt={skill.pres}
                                colorx={['bg-destructive']}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default DBSection;

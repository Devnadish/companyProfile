import Title from '@/components/shared/title/Title';
import CardWithImage from '@/components/shared/cardWithImage/CardWithImage';
import { getDictionary } from '@/lib/dictionary';
import { sectionStyle, sectionGridStyle } from '@/styles/homeSectionStyle';
import { section8Data } from './utl';

export const InspireSection = async ({ lang }) => {
    const {
        page: {
            home: { inspire },
        },
    } = await getDictionary(lang);

    const Imageurl = '/assets/homePage/inSpirceSection/';
    const data = section8Data(inspire, lang);
    return (
        <>
            <section className={sectionStyle}>
                <div className='w-auto'>
                    <Title title={inspire.title} withBtn flag='title' />
                </div>

                <div className={sectionGridStyle}>
                    {data.data.map((section8) => {
                        return (
                            <CardWithImage
                                key={section8.id}
                                title={section8.title}
                                imageUrl={Imageurl + section8.imageUrl}
                                des={section8.des}
                                link={section8.link}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
};

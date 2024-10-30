'use client'
import Image from 'next/image';
import React from 'react';
import { title, paragraph } from '../primitives';
import manulifeimg from '../../assets/logos/manulife.png'
import bluecrossimg from '../../assets/logos/bluecross.png'
import canadalifeimg from '../../assets/logos/canadalife.png'
import greenshieldeimg from '../../assets/logos/greenshield.png'
import empirelifeimg from '../../assets/logos/empirelife.png'
import sunlifeimg from '../../assets/logos/sunlife.png'
import Link from 'next/link';


interface InsuranceGridProps {
}

const InsuranceGrid: React.FC<InsuranceGridProps> = ({ }) => {

    const providers = [
        {
            name: "Sunlife",
            logo: sunlifeimg,
            url: "https://www.sunlife.ca/en/"
        },
        {
            name: "Manulife",
            logo: manulifeimg,
            url: "https://www.manulife.ca/personal.html"
        },
        {
            name: "Canada Life",
            logo: canadalifeimg,
            url: "https://www.canadalife.com/"
        },
        {
            name: "Green Shield",
            logo: greenshieldeimg,
            url: "https://www.greenshield.ca/en-ca"
        },
        {
            name: "Blue Cross",
            logo: bluecrossimg,
            url: "https://on.bluecross.ca/"
        },
        {
            name: "Empire Life",
            logo: empirelifeimg,
            url: "https://www.empire.ca/"
        },

    ]


    return (
        <div className="flex flex-col items-center w-full mt-0 gap-10 bg-white rounded-3xl p-20">
            <div className='flex flex-col'>
                <h1 className={title({ size: 'md', alignment: 'center' })}>Simplifying Dental Care for You</h1>
                <h1 className={paragraph({ size: 'lg' })}>At Smiline Dentistry, we believe in making dental care as easy and accessible as possible. That's why we work with most insurance providers to offer direct billing services. This means you don't need to handle any paperwork—we'll submit your claims for you, directly to your insurer.</h1>
            </div>
            <div className='flex flex-col gap-10'>
                <h1 className={title({ size: 'sm', alignment: 'center' })}>Accepted Insurance Providers</h1>
                <div className='flex flex-wrap gap-10 justify-center'>
                    {providers.map(provider => (
                        <Link key={provider.name} href={provider.url}>
                            <Image
                                src={provider.logo}
                                alt={provider.name}
                                width={0}
                                height={60}
                            />
                        </Link>
                    ))}
                    <h1 className={paragraph({ size: 'lg', color:'default' })}>and others.</h1>
                </div>
                <h1 className={paragraph({ size: 'lg' })}>In addition to these providers, we accept <Link className={'text-default font-semibold underline'} href={"https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html"}>CDCP (Canadian Dental Care Plan)</Link> and <Link className={'text-default font-semibold underline'} href={"https://www.ontario.ca/page/services-covered-by-healthy-smiles-ontario"}>HSO (Healthy Smiles of Ontario)</Link>, ensuring that families and individuals alike have options to manage their dental care expenses.</h1>
            </div>


            <div className={`flex flex-col w-full px-10 lg:p-0 justify-center text-left`}>
            </div>
        </div>
    );
}

export default InsuranceGrid;

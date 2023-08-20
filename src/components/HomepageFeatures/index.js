import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

const FeatureList = [
    {
        title: 'iOS App',
        image: 'img/appIcon.png',
        link: 'https://apps.apple.com/us/app/bluetooth-serial-connect/id6449396821',
        description: (
            <>
                Connect your iOS device to any BLE device and send data to and from it!
            </>
        ),
    },
    {
        title: 'Documentation',
        link: 'https://docs.henhen1227.com/docs/intro',
        image: 'img/logoDocs.png',
        description: (
            <>
                Follow the instructions of the documentation to get started with the BluetoothSerial Library.
            </>
        ),
    },
    {
        title: 'Arduino Library',
        link: 'https://github.com/hen1227/bluetooth-serial',
        image: 'img/Arduino_Logo.png',
        description: (
            <>
                Use the BluetoothSerial Library to simplify the bluetooth control in your Arduino projects.
            </>
        ),
    },
];

function Feature({link, image, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <a href={link} style={{textDecoration:"none"}}>
                <div className="text--center padding-horiz--md">
                    <h3>{title}</h3>
                    <div className="text--center">
                        <img className={styles.featureSvg} src={image} role="img" alt={title} style={{borderRadius:10}}/>
                    </div>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

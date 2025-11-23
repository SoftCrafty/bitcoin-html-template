import React, { useEffect, useRef } from "react";
import { Link } from '@inertiajs/react';
import CostCalculation from './CostCalculation';
import MapLocation from './MapLocation';
import VirtualTour from './VirtualTour';
import EnvironmentRisk from './EnvironmentRisk';
import MarketInsight from './MarketInsight';
import ListingSchedule from './ListingSchedule';
import MonthlyPayment from './MonthlyPayment';
import ListingFeatures from './ListingFeatures';
import History from './HistoryGraph';
import HistoryGraph from './HistoryGraph';
import OverView from './OverView';
import { asset, useBtcConversion } from '@/lib/utils';
import ReviewSection from './ReviewSection';

export default function DetailsBody({ listing, nearbyListings, activeTab, setActiveTab }) {

    const activeOffset = 300;

    const sectionRefs = {
        overview: useRef(null),
        mb_history: useRef(null),
        mb_feature: useRef(null),
        monthly_payment: useRef(null),
        similar_properties: useRef(null),
    };

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;

            Object.entries(sectionRefs).forEach(([id, ref]) => {
                if (ref.current) {
                    const top = ref.current.offsetTop;
                    const height = ref.current.offsetHeight;

                    if (y >= top - activeOffset && y < top + height - 300) {
                        setActiveTab(id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);

        const element = sectionRefs[tab]?.current;
        if (element) {
            const position = element.offsetTop - activeOffset;
            window.scrollTo({
                top: position,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            <div className="desktop_tab_group">
                <div
                    id="overview"
                    className={`item tab_section ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => handleTabClick('overview')}
                >
                    Overview
                </div>

                <div
                    className={`item tab_section ${activeTab === 'mb_history' ? 'active' : ''}`}
                    onClick={() => handleTabClick('mb_history')}
                >
                    Property History
                </div>

                <div
                    className={`item tab_section ${activeTab === 'mb_feature' ? 'active' : ''}`}
                    onClick={() => handleTabClick('mb_feature')}
                >
                    Features & Details
                </div>

                <div
                    className={`item tab_section ${activeTab === 'monthly_payment' ? 'active' : ''}`}
                    onClick={() => handleTabClick('monthly_payment')}
                >
                    Monthly Payment
                </div>

                <div
                    className={`item tab_section ${activeTab === 'similar_properties' ? 'active' : ''}`}
                    onClick={() => handleTabClick('similar_properties')}
                >
                    Similar Properties
                </div>
            </div>

            <div className="mb_content_area">

                <div ref={sectionRefs.overview}>
                    <OverView listing={listing} />
                </div>

                <div ref={sectionRefs.mb_history}>
                    <History />
                </div>

                <div ref={sectionRefs.mb_feature}>
                    <ListingFeatures listing={listing} nearbyListings={nearbyListings} />
                </div>

                <div ref={sectionRefs.monthly_payment}>
                    <MonthlyPayment listing={listing} />
                </div>

                <div ref={sectionRefs.similar_properties}>
                    <div className="similar_properties">
                        <h2>Similar Properties</h2>
                    </div>
                </div>

            </div>
        </>
    );
}

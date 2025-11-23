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
 
const DetailsBody = ({
    listing,
    activeTab,
    setActiveTab,
    isSaving,
    localIsSaved,
    toggleSaveListing,
    marketInsights,
    nearbyListings

}: {
    listing: any;
    activeTab: string;
    setActiveTab: (tab: string) => void;
    isSaving: boolean;
    localIsSaved: boolean;
    toggleSaveListing: () => void;
    marketInsights: any;
}) => {
    const calculateMonthlyCost = () => {
        const priceUsd = parseFloat(listing.price_usd) || 0;
        const monthlyCost = priceUsd / 12;
        return monthlyCost.toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    };

    


    const btcAmount = useBtcConversion(listing.price_usd);
    console.log('listing', listing);
    return (
        <section className="rb_project_tab">
            
            
                <div className="rb_project_content">
                    <div className="row">
                        <div className="col-12">
                            <div className="rb_tab_buttons mb-60 overflow-auto">
                                <div
                                    id="overview"
                                    className={`item mb_tab ${activeTab === 'overview' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('overview')}>
                                    Overview
                                </div>
                                {/* <div
                                    id="mb_history"
                                    className={`item mb_tab ${activeTab === 'mb_history' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('mb_history')}
                                    style={{ cursor: 'pointer' }}>
                                    History
                                </div> */}
                                <div
                                    className={`item mb_tab ${activeTab === 'mb_feature' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('mb_feature')}>
                                    Features & Details
                                </div>
                                <div
                                    className={`item mb_tab ${activeTab === 'monthly_payment' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('monthly_payment')}>
                                    Monthly Payment
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-8">
                            <div
                                className="rb_add_favorite_btn mb-30"
                                onClick={toggleSaveListing}

                            >
                                <span>
                                    {localIsSaved ? (
                                        <i className="fa-solid fa-heart" style={{ color: 'red', fontSize: '18px' }}></i>
                                    ) : (
                                        <img src="/images/icon/love-icon.svg" alt="icon" />
                                    )}
                                </span>{' '}
                                {localIsSaved ? 'Remove from Favorite' : 'Add To Favorite'}
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-xxl-8">
                            {activeTab === 'overview' && (
                                <OverView listing={listing} />
                            )}
                            {activeTab === 'mb_history' && (
                                <History />
                            )}
                            {/* <HistoryGraph /> */}
                            {/* Tab Content */}
                            {activeTab === 'mb_feature' && (
                                <ListingFeatures listing={listing} nearbyListings={nearbyListings} />
                            )}
                            {/* Monthly Payment Start  */}
                            {activeTab === 'monthly_payment' && (
                                <MonthlyPayment listing={listing} />
                            )}
                            {/* Monthly Payment End  */}

                            {/* Costs For this home Start  */}
                            <CostCalculation listing={listing} />
                            {/* Costs For this home End  */}

                            {/* Map Location Start  */}
                            <MapLocation listing={listing} />
                            {/* Map Location End  */}

                            {/* Virtual Tour Start  */}
                            <VirtualTour video={listing.assets} />
                            {/* Virtual Tour End  */}

                            {/* Environment risk Start  */}
                            <EnvironmentRisk environmentRisks={listing.listing_environment_risk} />
                            {/* Environment risk End  */}

                            {/* Market Insights Start  */}
                            <MarketInsight marketInsights={marketInsights} />
                            {/* Market Insights End  */}

                            {/* Review Section Start */}
                            <ReviewSection
                                listingId={listing.id}
                                initialSummary={listing?.review_summary || { average: 0, count: 0 }}
                                postRouteName="user.listings.reviews.store"
                            />
                            {/* Review Section End */}
                            {/* Broker Info Start  */}
                            <div className="mb_broker_info_area mt-40">
                                <div className="mb_broker_info_block">
                                    <div className="mb_broker_content">
                                        <div className="row align-items-end">
                                            <div className="col-lg-4">
                                                <div className="mb_agent_info">
                                                    <div className="mb_agent_photo">
                                                        {/* <img src="/images/post_property/broker/broker.png" alt="Agent Profile Photo" /> */}
                                                        <img src={listing?.user?.avatar
                                                            ? `${listing?.user?.avatar}`
                                                            : "/images/post_property/broker/broker.png"} alt="Agent Profile Photo" />
                                                    </div>
                                                    <div className="mb_agent_details">
                                                        <div className="mb_listed_by">
                                                            Listed by{' '}
                                                            <Link href={route('agent.show', listing.user.slug)} className="mb_agent_name">
                                                                {listing?.user?.name ?? 'N/A'}
                                                            </Link>
                                                        </div>
                                                        {/* <div className="mb_brokerage_name">Broked by keller williams north valley</div> */}
                                                        <div className="mb_phone_number">{listing?.user?.phone ?? 'N/A'}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="mb_broker_data">
                                                    <div className="mb_data_row">
                                                        <div className="mb_data_label">Broker location:</div>
                                                        <div className="mb_data_value text-capitalize">{listing?.user?.address ?? 'N/A'}</div>
                                                    </div>
                                                    {/* <div className="mb_data_row">
                                                        <div className="mb_data_label">Date source:</div>
                                                        <div className="mb_data_value">CRMLS</div>
                                                    </div>
                                                    <div className="mb_data_row">
                                                        <div className="mb_data_label">Source's property ID:</div>
                                                        <div className="mb_data_value">SR0254655</div>
                                                    </div>
                                                    <div className="mb_data_row">
                                                        <div className="mb_data_label">Data source Copyright:</div>
                                                        <div className="mb_data_value">
                                                            @ 2025, California Regional Multiple Listing service,
                                                            <br />
                                                            Inc. All Rights Reserved.
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Broker Info End  */}
                        </div>
                        <div className="col-xxl-4 d-none d-xxl-block">
                            <div className="rb_btc_card mb-40">
                                <div>
                                    <span className="rb_btc_text">${listing.price_usd ?? 0}</span>
                                    <span className="rb_btc_value">BTC{' '}{btcAmount ?? 0}</span>
                                    <span className="rb_sale">{listing?.listing_type?.translation?.name ?? 'N/A'}</span>
                                </div>
                                <div className="rb_est">
                                    Est. {calculateMonthlyCost()}/mo<span>$</span> <img src={asset('images/icon/edit-icon.svg')} alt="icon" />
                                </div>
                            </div>
                            <ListingSchedule scheduleDates={listing.schedule_date} listingId={listing.id} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsBody;

import React, { useState, useRef } from "react";
import { useStyles } from "./styles";

// Icons
import { ReactComponent as Business } from "./icons/business.svg";
import { ReactComponent as Comfort } from "./icons/comfort.svg";
import { ReactComponent as Eoselya } from "./icons/eoselya.svg";
import { ReactComponent as Filtre } from "./icons/filtre.svg";
import { ReactComponent as Promotion } from "./icons/promotion.svg";
import { ReactComponent as Ready } from "./icons/ready.svg";
import { ReactComponent as Repair } from "./icons/repair.svg";
// Icons

import NavigationTabs from "../NavigationTabs/NavigationTabs";
import CollapsibleFilter from "./CollapsibleFilter";
import FilterOptionSlider from "./FilterOptionSlider";
import { LocationFilterPopup } from "../FilterHeader/LocationFilter/LocationFilterPopup";
import { PriceFilterPopup } from "../FilterHeader/PriceFilter/PriceFilterPopup";
import TypeFilterPopup from "../FilterHeader/TypeFilter/TypeFilterPopup";
import RoomsFilterPopup from "../FilterHeader/RoomsFilter/RoomsFilterPopup";

import useGlobalStyles from "../App/GlobalStyles";

import ClassFilterPopup from "../FilterHeader/ClassFilterPopup/ClassFilterPopup";
import ProjectNameFilterPopup from "../FilterHeader/ProjectNameFilterPopup/ProjectNameFilterPopup";
import BuildingFilterPopup from "../FilterHeader/BuildingFilterPopup/BuildingFilterPopup";
import SectionFilterPopup from "../FilterHeader/SectionFilterPopup/SectionFilterPopup";

import ConstructionStagePopup from "../FilterHeader/ConstructionStagePopup/ConstructionStagePopup";
import CompletionDatePopup from "../FilterHeader/CompletionDatePopup/CompletionDatePopup";
import FinishingStagePopup from "../FilterHeader/FinishingStagePopup/FinishingStagePopup";

import LevelsPopup from "../FilterHeader/LevelsPopup/LevelsPopup";
import PurchaseTermsPopup from "../FilterHeader/PurchaseTermsPopup/PurchaseTermsPopup";
import SalesStatusPopup from "../FilterHeader/SalesStatusPopup/SalesStatusPopup";
import AdditionalBenefitsPopup from "../FilterHeader/AdditionalBenefitsPopup/AdditionalBenefitsPopup";

import FilterActions from "../FilterHeader/FilterActions/FilterActions";

const FilterOptions = () => {
    const classes = useStyles();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [activeOptions, setActiveOptions] = useState([]);
    const [priceRange, setPriceRange] = useState([100000, 888888]);
    const [pricePerSqm, setPricePerSqm] = useState([100000, 888888]);
    const [totalArea, setTotalArea] = useState([20.2, 8888.88]);
    const [floor, setFloor] = useState([1, 88]);
    const [selectedRooms, setSelectedRooms] = useState([]);
    const [activeTab, setActiveTab] = useState("city");
    const [activeButtons, setActiveButtons] = useState([]);
    const [activeStations, setActiveStations] = useState({});

    const [activeClasses, setActiveClasses] = useState([]);
    const [activeProjects, setActiveProjects] = useState([]);
    const [activeBuildings, setActiveBuildings] = useState([]);
    const [activeSections, setActiveSections] = useState([]);

    const [activeStages, setActiveStages] = useState([]);
    const [activeDates, setActiveDates] = useState([]);
    const [activeFinishes, setActiveFinishes] = useState([]);

    const [activeLevels, setActiveLevels] = useState([]);
    const [activeTerms, setActiveTerms] = useState([]);
    const [activeStatus, setActiveStatus] = useState([]);
    const [activeBenefits, setActiveBenefits] = useState([]);
    const [currency, setCurrency] = useState("UAH");

    const popupOverlayRef = useRef(null);
    const popupContentRef = useRef(null);

    const options = [
        { label: "З ремонтом", icon: <Repair /> },
        { label: "Акція", icon: <Promotion /> },
        { label: "Готово до заселення", icon: <Ready /> },
        { label: "Є-оселя", icon: <Eoselya /> },
        { label: "Бізнес-клас", icon: <Business /> },
        { label: "Комфорт", icon: <Comfort /> },
        { label: "Комфорт 2", icon: <Business /> },
        { label: "Комфорт 3", icon: <Business /> },
        { label: "Комфорт 4", icon: <Business /> },
        { label: "Комфорт 5", icon: <Business /> },
    ];

    const togglePopup = () => setIsPopupOpen(!isPopupOpen);

    const handleOptionClick = (index) => {
        setActiveOptions((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const handleCurrencyToggle = (newCurrency) => {
        setCurrency(newCurrency);
    };

    useGlobalStyles();

    // You can add clss .showTabs for filterOptionsContainer

    return (
        <div className={classes.filterOptionsContainer}>
            <FilterOptionSlider
                options={options}
                activeOptions={activeOptions}
                onOptionClick={handleOptionClick}
                classes={classes}
            />

            <div className={classes.allFiltersButtonTitle}>
                Пошук усіх проєктів
            </div>

            <div
                className={[classes.allFiltersTabs, "allFiltersTabsTop"].join(
                    " "
                )}
            >
                <NavigationTabs
                    activeTab={activeTab}
                    onTabClick={handleTabClick}
                />
            </div>

            <button className={classes.allFiltersButton} onClick={togglePopup}>
                <span className="icon">
                    <Filtre />
                </span>
                <span className={classes.allFiltersButtonDesktop}>
                    Всі фільтри
                </span>
                <span className={classes.allFiltersButtonMobile}>Фільтри</span>
                <span className={classes.allFilters}>88</span>
            </button>

            {isPopupOpen && (
                <div
                    ref={popupOverlayRef}
                    className={classes.popupOverlay}
                    onClick={(e) => {
                        if (e.target === popupOverlayRef.current) {
                            setIsPopupOpen(false);
                        }
                    }}
                >
                    <div
                        ref={popupContentRef}
                        className={classes.popupContent}
                    >
                        <h2 className={classes.popupContentTitle}>
                            Всі фільтри
                        </h2>

                        <button className={classes.popupContentClose}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsPopupOpen(false);
                                }}>
                        </button>

                        <div className={classes.popupContentInner}>
                            <CollapsibleFilter
                                title="Локація"
                                classes={classes}
                            >
                                <LocationFilterPopup
                                    isPopupOpen={isPopupOpen}
                                    setIsPopupOpen={setIsPopupOpen}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                    activeButtons={activeButtons}
                                    setActiveButtons={setActiveButtons}
                                    activeStations={activeStations}
                                    setActiveStations={setActiveStations}
                                    showActions={false}
                                    customClass={classes.customPopup}
                                />
                            </CollapsibleFilter>
                            <CollapsibleFilter
                                title="Тип нерухомості"
                                classes={classes}
                            >
                                <TypeFilterPopup
                                    isPopupOpen={isPopupOpen}
                                    setIsPopupOpen={setIsPopupOpen}
                                    activeButtons={activeButtons} // передаем сюда
                                    setActiveButtons={setActiveButtons}
                                    showActions={false}
                                    customClass={classes.customPopup}
                                />
                            </CollapsibleFilter>
                            <CollapsibleFilter
                                title="Вартість, грн"
                                classes={classes}
                                showSwitcher={true}
                                currency={currency}
                                onCurrencyToggle={handleCurrencyToggle}
                            >
                                <PriceFilterPopup
                                    value={priceRange}
                                    setValue={setPriceRange}
                                    isPopupOpen={isPopupOpen}
                                    setIsPopupOpen={setIsPopupOpen}
                                    showActions={false}
                                    customClass={classes.customPopup}
                                    min={100000}
                                    max={888888}
                                    labelFrom="від, грн"
                                    labelTo="до, грн"
                                />
                            </CollapsibleFilter>

                            <CollapsibleFilter
                                title="Кімнатність"
                                classes={classes}
                            >
                                <RoomsFilterPopup
                                    isPopupOpen={isPopupOpen}
                                    setIsPopupOpen={setIsPopupOpen}
                                    selectedRooms={selectedRooms}
                                    setSelectedRooms={setSelectedRooms}
                                    renderType="button"
                                    showActions={false}
                                    customClass={classes.customPopup}
                                />
                            </CollapsibleFilter>
                            <CollapsibleFilter
                                title="Вартість за м², грн"
                                classes={classes}
                                showSwitcher={true}
                                currency={currency}
                                onCurrencyToggle={handleCurrencyToggle}
                            >
                                <PriceFilterPopup
                                    value={pricePerSqm}
                                    setValue={setPricePerSqm}
                                    isPopupOpen={isPopupOpen}
                                    setIsPopupOpen={setIsPopupOpen}
                                    showActions={false}
                                    customClass={classes.customPopup}
                                    min={100000}
                                    max={888888}
                                    labelFrom="від, грн"
                                    labelTo="до, грн"
                                />
                            </CollapsibleFilter>
                            <CollapsibleFilter
                                title="Загальна площа, м²"
                                classes={classes}
                            >
                                <PriceFilterPopup
                                    value={totalArea}
                                    setValue={setTotalArea}
                                    isPopupOpen={isPopupOpen}
                                    setIsPopupOpen={setIsPopupOpen}
                                    showActions={false}
                                    customClass={classes.customPopup}
                                    min={20.2}
                                    max={8888.88}
                                    labelFrom="від, м²"
                                    labelTo="до, м²"
                                />
                            </CollapsibleFilter>
                            <CollapsibleFilter title="Поверх" classes={classes}>
                                <PriceFilterPopup
                                    value={floor}
                                    setValue={setFloor}
                                    isPopupOpen={isPopupOpen}
                                    setIsPopupOpen={setIsPopupOpen}
                                    showActions={false}
                                    customClass={classes.customPopup}
                                    min={1}
                                    max={88}
                                    labelFrom="від"
                                    labelTo="до"
                                />
                            </CollapsibleFilter>
                            {/* New */}
                            <CollapsibleFilter
                                title="Клас проєкту"
                                classes={classes}
                            >
                                <ClassFilterPopup
                                    activeClasses={activeClasses}
                                    setActiveClasses={setActiveClasses}
                                />
                            </CollapsibleFilter>
                            <CollapsibleFilter
                                title="Назва проєкту"
                                classes={classes}
                            >
                                <ProjectNameFilterPopup
                                    activeProjects={activeProjects}
                                    setActiveProjects={setActiveProjects}
                                />
                            </CollapsibleFilter>
                            <CollapsibleFilter
                                title="Будинок"
                                classes={classes}
                            >
                                <BuildingFilterPopup
                                    activeBuildings={activeBuildings}
                                    setActiveBuildings={setActiveBuildings}
                                />
                            </CollapsibleFilter>
                            <CollapsibleFilter
                                title="Секція/Вежа"
                                classes={classes}
                            >
                                <SectionFilterPopup
                                    activeSections={activeSections}
                                    setActiveSections={setActiveSections}
                                />
                            </CollapsibleFilter>

                            <CollapsibleFilter
                                title="Етап будівництва"
                                classes={classes}
                            >
                                <ConstructionStagePopup
                                    activeStages={activeStages}
                                    setActiveStages={setActiveStages}
                                />
                            </CollapsibleFilter>

                            <CollapsibleFilter
                                title="Завершення будівництва"
                                classes={classes}
                            >
                                <CompletionDatePopup
                                    activeDates={activeDates}
                                    setActiveDates={setActiveDates}
                                />
                            </CollapsibleFilter>

                            <CollapsibleFilter
                                title="Стан оздоблення"
                                classes={classes}
                            >
                                <FinishingStagePopup
                                    activeFinishes={activeFinishes}
                                    setActiveFinishes={setActiveFinishes}
                                />
                            </CollapsibleFilter>

                            <CollapsibleFilter
                                title="Рівневість"
                                classes={classes}
                            >
                                <LevelsPopup
                                    activeLevels={activeLevels}
                                    setActiveLevels={setActiveLevels}
                                />
                            </CollapsibleFilter>

                            <CollapsibleFilter
                                title="Умови купівлі"
                                classes={classes}
                            >
                                <PurchaseTermsPopup
                                    activeTerms={activeTerms}
                                    setActiveTerms={setActiveTerms}
                                />
                            </CollapsibleFilter>

                            <CollapsibleFilter
                                title="Статус продажу"
                                classes={classes}
                            >
                                <SalesStatusPopup
                                    activeStatus={activeStatus}
                                    setActiveStatus={setActiveStatus}
                                />
                            </CollapsibleFilter>

                            <CollapsibleFilter
                                title="Додаткові переваги"
                                classes={classes}
                            >
                                <AdditionalBenefitsPopup
                                    activeBenefits={activeBenefits}
                                    setActiveBenefits={setActiveBenefits}
                                />
                            </CollapsibleFilter>

                            <FilterActions applyTitle="Показати (23 проєкти)" onApply={() => setIsPopupOpen(false)} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterOptions;

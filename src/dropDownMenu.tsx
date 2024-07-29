import React from "react";
import categoriesJson from "./categories";

type CategoryItem = {
  content: string;
};
type CategorySubSubItem = {
  title: string;
  items: CategoryItem[];
};
type ActualCategory = {
  nameEn: string;
  namePr: string;
  items: {
    title: string;
    items: CategoryItem[];
    subItems?: CategorySubSubItem[];
  }[];
};
type CategoriesT = {
  category: ActualCategory[];
};
const allCategories: CategoriesT = categoriesJson;

type categoryT = {
  targetAddress: string;
  mouseOverFunction: React.MouseEventHandler<HTMLAnchorElement> | undefined;
  mouseOutFunction?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
  content: string;
  symbolIconClass?: string;
  symbolIconName?: string;
};
// Each Category
const Category: React.FC<categoryT> = ({
  targetAddress,
  mouseOverFunction,
  mouseOutFunction,
  content,
  symbolIconClass,
  symbolIconName,
}) => {
  return (
    <a
      href={targetAddress}
      onMouseOver={mouseOverFunction}
      onMouseOut={mouseOutFunction}
      className="categoryMainItem"
    >
      {content}
      <span className={`${symbolIconClass} `}>
        {symbolIconName ? symbolIconName : ""}
      </span>
    </a>
  );
};

type subCategoryTitleType = {
  allLinks: string;
  linkClass?: string;
  groupTitle: string;
};
const SubCategoryTitle: React.FC<subCategoryTitleType> = ({
  allLinks,
  groupTitle,
}) => {
  return (
    <div className="subCategoryTitleLable">
      <a href={allLinks} className={"subCategoryTitle"}>
        همه محصولات {groupTitle + "  >"}
      </a>
    </div>
  );
};

const DropDownMenu = () => {
  const [activeTabId, setActiveTabId] = React.useState("mobiles");

  const SideCategoryTab = () => {
    return allCategories.category
      .slice()
      .reverse()
      .map((category) => (
        <div
          key={category.nameEn + Math.random()}
          id={category.nameEn}
          className={`subcategory pb-6 ${
            activeTabId === category.nameEn ? `block` : `hidden`
          }`}
        >
          <SubCategoryTitle
            key={category.nameEn + Math.random()}
            allLinks={`MORE/category/all_${category.nameEn}`}
            groupTitle={category.namePr}
          />
          <div className="subSubcatLable">
            <div className="subSubCategory">
              {category.items
                .slice()
                .reverse()
                .map((TopItem, index: number) => (
                  <dl
                    key={TopItem.title + index * Math.random()}
                    className="sub-subCategory-item"
                  >
                    <dt className="sub-subCategory-item-title-lable mt-3">
                      <a
                        href={`MORE/subCategory/${TopItem.title}`}
                        className="sub-subCategory-item-title"
                      >
                        {TopItem.title}
                      </a>
                    </dt>
                    {TopItem.items.map((item, index: number) => (
                      <dd
                        key={item.content + index * (3 - 12 / 3)}
                        className="sub-subCategory-item-subItem-lable"
                      >
                        <a
                          href={`MORE/subCategory/${item.content}`}
                          className="sub-subCategory-item-subItem"
                        >
                          {item.content}
                        </a>
                      </dd>
                    ))}
                    {TopItem.subItems?.map((subItem, index: number) => (
                      <>
                        <dt
                          key={subItem.title + index * (4 - 12 / 3)}
                          className="sub-subCategory-item-title-lable mt-3"
                        >
                          <a
                            href={`MORE/subCategory/${subItem.title}`}
                            className="sub-subCategory-item-title"
                          >
                            {subItem.title}
                          </a>
                        </dt>
                        {subItem.items.map((item, index: number) => (
                          <dd
                            key={item.content + index * (5 - 12 / 3)}
                            className="sub-subCategory-item-subItem-lable"
                          >
                            <a
                              href={`MORE/subCategory/${item.content}`}
                              className="sub-subCategory-item-subItem"
                            >
                              {item.content}
                            </a>
                          </dd>
                        ))}
                      </>
                    ))}
                  </dl>
                ))}
            </div>
          </div>
        </div>
      ));
  };

  return (
    <div className="dropDownMenu h-[400px] xl:h-[510px]">
      <div className="category-main-part">
        {/* {allCategories.category.map(category => 
          <Category
          targetAddress={category.nameEn}
          mouseOverFunction={() => setActiveTabId(category.nameEn)}
          content={category.namePr}
          symbolIconClass={"material-symbols-outlined bi bi-phone"}
        />
        )} */}
        <Category
          key={"mobiles"}
          targetAddress={"mobiles"}
          mouseOverFunction={() => setActiveTabId(`mobiles`)}
          content={"موبایل"}
          symbolIconClass={"material-symbols-outlined bi bi-phone"}
        />
        <Category
          key={"BookAndMedia"}
          targetAddress={`BookAndMedia`}
          mouseOverFunction={() => setActiveTabId(`BookAndMedia`)}
          content={"کتاب, لوازم تحریر و هنر"}
          symbolIconClass={"material-symbols-outlined"}
          symbolIconName={"design_services"}
        />
        <Category
          key={"electronic-devices"}
          targetAddress={"electronic-devices"}
          mouseOverFunction={() => setActiveTabId(`electronic-devices`)}
          content={"کالای دیجیتال"}
          symbolIconClass={"material-symbols-outlined"}
          symbolIconName={"laptop_chromebook"}
        />
        <Category
          key={`homeAndKitchen`}
          targetAddress={`homeAndKitchen`}
          mouseOverFunction={() => setActiveTabId(`homeAndKitchen`)}
          content={`خانه و آشپزخانه`}
          symbolIconClass={"material-symbols-outlined"}
          symbolIconName={"chair"}
        />
        <Category
          key={`HomeAppliance`}
          targetAddress={`HomeAppliance`}
          mouseOverFunction={() => setActiveTabId(`HomeAppliance`)}
          content={`لوازم خانگی برقی`}
          symbolIconClass={"material-symbols-outlined"}
          symbolIconName={"kitchen"}
        />
        <Category
          key={`Apparel`}
          targetAddress={`Apparel`}
          mouseOverFunction={() => setActiveTabId(`Apparel`)}
          content={"مد و پوشاک"}
          symbolIconClass={"material-symbols-outlined"}
          symbolIconName={"apparel"}
        />
        <Category
          key={`PersonalAppliance`}
          targetAddress={`PersonalAppliance`}
          mouseOverFunction={() => setActiveTabId(`PersonalAppliance`)}
          content={"زیبایی و سلامت"}
          symbolIconClass={"material-symbols-outlined"}
          symbolIconName={"heart_check"}
        />
        <Category
          key={`GiftCard`}
          targetAddress={`GiftCard`}
          mouseOverFunction={() => setActiveTabId(`GiftCard`)}
          content={"کارت هدیه"}
          symbolIconClass={"material-symbols-outlined"}
          symbolIconName={"redeem"}
        />
        <Category
          key={`FoodBeverage`}
          targetAddress={"FoodBeverage"}
          mouseOverFunction={() => setActiveTabId(`FoodBeverage`)}
          content={"کالاهای سوپرمارکتی"}
          symbolIconClass={"material-symbols-outlined"}
          symbolIconName={"grocery"}
        />
        <Category
          key={`MotherAndChild`}
          targetAddress={`MotherAndChild`}
          mouseOverFunction={() => setActiveTabId(`MotherAndChild`)}
          content={"اسباب بازی, کودک و نوزاد"}
          symbolIconClass={"material-symbols-outlined"}
          symbolIconName={"child_care"}
        />
        <Category
          key={`Vehicles`}
          targetAddress={`Vehicles`}
          mouseOverFunction={() => setActiveTabId(`Vehicles`)}
          content={"ابراز آلات و تجهیزات"}
          symbolIconClass={"material-symbols-outlined"}
          symbolIconName={"build"}
        />
        <Category
          key={`VehiclesSpareParts`}
          targetAddress={`VehiclesSpareParts`}
          mouseOverFunction={() => setActiveTabId(`VehiclesSpareParts`)}
          content={"خودرو و موتورسیکلت"}
          symbolIconClass={"material-symbols-outlined"}
          symbolIconName={"directions_car"}
        />
        <Category
          key={`SportEntertainment`}
          targetAddress={`SportEntertainment`}
          mouseOverFunction={() => setActiveTabId(`SportEntertainment`)}
          content={"ورزش و سفر"}
          symbolIconClass={"material-symbols-outlined"}
          symbolIconName={"camping"}
        />
        <Category
          key={`RuralProduct`}
          targetAddress={`RuralProduct`}
          mouseOverFunction={() => setActiveTabId(`RuralProduct`)}
          content={"محصولات بومی و محلی"}
          symbolIconClass={"material-symbols-outlined"}
          symbolIconName={"folded_hands"}
        />
      </div>
      <SideCategoryTab />
    </div>
  );
};

export default DropDownMenu;

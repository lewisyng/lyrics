import { Input } from "../../components/Input";
import cn from "classnames";
import styles from "./SearchPage.module.sass";
import Button from "../../components/Button/Button";

export const SearchPage = () => {
  return (
    <div className={cn(styles.Searchpage)}>
      <div className={cn(styles.Searchpage__input)}>
        <Input placeholder={"Search for artists..."} />
        <Button text={"press"} theme={"primary"} />
      </div>
    </div>
  );
};

export default SearchPage;

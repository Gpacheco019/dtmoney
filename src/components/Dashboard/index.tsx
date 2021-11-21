import { Summary } from "../Summary";
import { Transactions } from "../Transactions";
import { Container } from "./styles";

export function Dashboard(){
    return(
        <Container>
            <Summary></Summary>
            <Transactions></Transactions>
        </Container>
    );
}
import { Monster } from "../../models/interfaces/monster.interface"
import { BattleMonsterCard, 
        BattleMonsterCardContent, 
        BattleMonsterCardContentRow, 
        BattleMonsterCardContentRowItem,
        BattleMonsterDivider,
        BattleMonsterImage, 
        BattleMonsterTitle, 
        BattleMonsterSubTitle,
        ProgressBar } 
from "./MonsterBattleCard.styled"

type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => {
    return (
        <BattleMonsterCard centralized>
            <BattleMonsterCardContent>

                {monster && (
                    <BattleMonsterImage 
                        src= {monster.imageUrl! }
                    />

                )}
            
        
                <BattleMonsterTitle>
                    { title || monster!.name }
                </BattleMonsterTitle>

                <BattleMonsterDivider></BattleMonsterDivider>


                { monster && (
                    <BattleMonsterCardContentRow>

                        <BattleMonsterCardContentRowItem sx={{flexGrow:1}}>

                            <BattleMonsterSubTitle variant="body2">HP</BattleMonsterSubTitle>
                            <ProgressBar variant="determinate" value={monster.hp!} />

                        </BattleMonsterCardContentRowItem>

                        <BattleMonsterCardContentRowItem sx={{flexGrow:1}}>

                            <BattleMonsterSubTitle variant="body2">Attack</BattleMonsterSubTitle>
                            <ProgressBar variant="determinate" value={monster.attack!} />
                            
                        </BattleMonsterCardContentRowItem>

                        <BattleMonsterCardContentRowItem sx={{flexGrow:1}}>
                            <BattleMonsterSubTitle variant="body2">Defense</BattleMonsterSubTitle>
                            <ProgressBar variant="determinate" value={monster.defense!}/>
                        </BattleMonsterCardContentRowItem>

                        <BattleMonsterCardContentRowItem sx={{flexGrow:1}}>
                            <BattleMonsterSubTitle variant="body2">Speed</BattleMonsterSubTitle>
                            <ProgressBar variant="determinate"  value={monster.speed!}/>
                        </BattleMonsterCardContentRowItem>

                    </BattleMonsterCardContentRow>
                )}
                



            </BattleMonsterCardContent>
        </BattleMonsterCard>
    )
}

export { MonsterBattleCard }
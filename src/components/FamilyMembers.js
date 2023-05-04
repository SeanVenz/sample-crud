import { CreateFamilyMember } from "./Family Members Util/CreateFamilyMember"
import { DeleteFamilyMemberByName } from "./Family Members Util/DeleteFamilyMemberByName"
import { GetAllFamilyMembers } from "./Family Members Util/GetAllFamilyMembers"
import { GetFamilyDetailsByName } from "./Family Members Util/GetFamilyDetailsByName"
import { GetFamilyMembersWithDetail } from "./Family Members Util/GetFamilyMemberWithDetail"
import { UpdateFamilyMember } from "./Family Members Util/UpdateFamilyMember"

export const FamilyMembers = () => {

    return(
        <div>
            <GetAllFamilyMembers></GetAllFamilyMembers>
            <GetFamilyMembersWithDetail></GetFamilyMembersWithDetail>
            <GetFamilyDetailsByName></GetFamilyDetailsByName>
            <DeleteFamilyMemberByName></DeleteFamilyMemberByName>
            <CreateFamilyMember></CreateFamilyMember>
            <UpdateFamilyMember></UpdateFamilyMember>
        </div>
    )
}
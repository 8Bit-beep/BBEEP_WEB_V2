import {useState, useCallback, useRef, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { converUrlToGrade } from "src/utils/transform/urlTransform";
import token from "src/libs/token/token";
import { ACCESS_TOKEN_KEY } from "src/constants/token.constants";
import { bbeepAxios } from "src/libs/axios/customAxios";
import {ClassManagement} from "src/types/management/studentManagement.type";
import {ClubEnumType} from "src/types/management/clubEnumType";

const useManagement = () => {
    const [memberList, setMemberList] = useState<ClassManagement[]>([]);

    const imsiClubRoom = {
        "BIND" : 3310,
        "CNS" : 3315,
        "ALT" : 3314,
        "D3" : 3304,
        "MODI" : 3301,
        "DUCAMI" : 2202,
        "DION" : 2205,
        "AND" : 2204,
        "COMMAND" : 2208,
        "DGSW42" : 2209

    }

    const handleManagement = async (club : ClubEnumType) => {
        bbeepAxios.get(
            `/student/study-list?club=${club}`,
            {
                headers: {
                    Authorization: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
                }
            }
        ).then((res) => {
            console.log(res.data.data);
            setMemberList(res.data.data);
        }).catch((err) => {
            console.error(err);
        })
    }

    return {
        memberList,
        handleManagement,
    };
};

export default useManagement;

import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CustomInputComponent from "../components/CustomInputComponent";
import { COLORS } from "../lib/styles/theme";
import { getUserPortfolio, putUserPortfolio } from "../api/userApi";
import useUserStore from "../stores/LoginUser";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

const PortfolioWritePage = () => {
  const navigate = useNavigate();

  const [department, setDepartment] = useState("");
  const [year, setYear] = useState(2000);
  const [semester, setSemester] = useState(1);
  const [credit, setCredit] = useState(1);
  const [certificateStr, setCertificateStr] = useState("");
  const [certificate, setCertificate] = useState([]);
  const [awardStr, setAwardStr] = useState("");
  const [award, setAward] = useState([]);
  const [link, setLink] = useState("");
  const [additional, setAdditional] = useState("");

  const parseAndSetCertificate = (value) => {
    const parsedValue = value
      .split(",")
      .map((chip) => chip.trim())
      .filter((chip) => chip !== "");
    setCertificateStr(value);
    setCertificate(parsedValue);
  };

  const parseAndSetAward = (value) => {
    const parsedValue = value
      .split(",")
      .map((chip) => chip.trim())
      .filter((chip) => chip !== "");
    setAwardStr(value);
    setAward(parsedValue);
    console.log(award);
  };

  const handleSubmit = () => {
    if (!department || department.length < 1) {
      enqueueSnackbar("학과를 적어주세요.", {
        variant: "error",
      });
      return;
    }
    if (parseInt(year) < 1 || parseInt(year) > 4) {
      enqueueSnackbar("학년을 알맞게 적어주세요", {
        variant: "error",
      });
      return;
    }
    if (parseInt(semester) < 1 || parseInt(semester) > 2) {
      enqueueSnackbar("학기를 알맞게 적어주세요", {
        variant: "error",
      });
      return;
    }
    if (parseInt(credit) < 0 || parseInt(semester) > 5) {
      enqueueSnackbar("학점을 알맞게 적어주세요", {
        variant: "error",
      });
      return;
    }
    if (!certificate || certificate.length < 1) {
      enqueueSnackbar("관심 분야를 적어주세요", { variant: "error" });
      return;
    }
    if (!award || award.length < 1) {
      enqueueSnackbar("수상 경력을 적어주세요", { variant: "error" });
      return;
    }
    if (!link || link.length < 1) {
      enqueueSnackbar("개인 블로그 링크를 적어주세요", { variant: "error" });
      return;
    }
    if (!additional || additional.length < 1) {
      enqueueSnackbar("깃헙 링크를 적어주세요", { variant: "error" });
      return;
    }
    putUserPortfolio(
      department,
      parseInt(year),
      parseInt(semester),
      parseInt(credit),
      certificate,
      award,
      link,
      additional
    ).then((res) => {
      console.log(res);
      navigate("/profilepage");
    });
  };

  const { User } = useUserStore();
  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const labData = await getUserPortfolio(User.id);
        if (labData) {
          setDepartment(labData.department);
          setYear(labData.year);
          setSemester(labData.semester);
          setCredit(labData.credit);
          setCertificate(labData.certificate);
          setCertificateStr(labData.certificate.join(", "));
          setAward(labData.award);
          setAwardStr(labData.award.join(", "));
          setLink(labData.link);
          setAdditional(labData.additional);
        }
      } catch (error) {
        // 에러 처리
      }
    };

    getPortfolio();
  }, []);

  return (
    <Box p={1}>
      <Typography variant="h2">포토폴리오 정보 수정</Typography>
      <Grid container py={2}>
        <Grid container spacing={1} item alignItems="center">
          <Grid item>
            <Typography variant="h4">학과</Typography>
          </Grid>
          <CustomInputComponent
            id="department-input"
            value={department}
            hintText="학과를 적어주세요"
            setValue={setDepartment}
          />
        </Grid>
        <Grid container spacing={1} item alignItems="center">
          <Grid item>
            <Typography variant="h4">재학 학년</Typography>
          </Grid>
          <CustomInputComponent
            id="year-input"
            value={year}
            setValue={setYear}
          />
          <Grid item>
            <Typography variant="h4">학년</Typography>
          </Grid>
          <CustomInputComponent
            id="semester-input"
            value={semester}
            setValue={setSemester}
          />
          <Grid item>
            <Typography variant="h4">학기</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1} item alignItems="center">
          <Grid item>
            <Typography variant="h4">학점</Typography>
          </Grid>
          <CustomInputComponent
            id="credit-input"
            value={credit}
            setValue={setCredit}
          />
        </Grid>
        <Grid container spacing={1} item alignItems="center">
          <Grid item>
            <Typography variant="h4">관심 분야</Typography>
          </Grid>
          <Grid item>
            <CustomInputComponent
              id="certificate-input"
              hintText="관심 분야를 쉼표로 구분하여 적어주세요"
              value={certificateStr}
              setValue={parseAndSetCertificate}
            />
            {certificate ? (
              <Grid container spacing={1}>
                {certificate.map((item, index) => {
                  return (
                    <Grid item>
                      <Chip variant="filled" label={item} />
                    </Grid>
                  );
                })}
              </Grid>
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
        <Grid container spacing={1} item alignItems="center">
          <Grid item>
            <Typography variant="h4">수상 경력</Typography>
          </Grid>
          <Grid item>
            <CustomInputComponent
              id="award-input"
              hintText="수상 경력을 쉼표로 구분하여 적어주세요"
              value={awardStr}
              setValue={parseAndSetAward}
            />
            {award ? (
              <Grid container spacing={1}>
                {award.map((item, index) => {
                  return (
                    <Grid item>
                      <Chip variant="filled" label={item} />
                    </Grid>
                  );
                })}
              </Grid>
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
        <Grid container spacing={1} item alignItems="center">
          <Grid item>
            <Typography variant="h4">개인 블로그 링크</Typography>
          </Grid>
          <CustomInputComponent
            id="link-input"
            value={link}
            setValue={setLink}
          />
        </Grid>
        <Grid container spacing={1} item alignItems="center">
          <Grid item>
            <Typography variant="h4">깃헙 링크</Typography>
          </Grid>
          <CustomInputComponent
            id="additional-input"
            value={additional}
            setValue={setAdditional}
          />
        </Grid>
      </Grid>
      <Box display="flex" paddingTop={2} justifyContent="center">
        <Button
          sx={{ width: "90%", height: "50px" }}
          variant="contained"
          onClick={handleSubmit}
        >
          <Typography variant="h4" color={COLORS.white}>
            입력 완료
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
export default PortfolioWritePage;

import {check} from "express-validator";

export const validation = [
  check("number").exists().withMessage("Номер пустий."),
  check("dateOfItem").exists().withMessage("Дата запису не вказана."),
  check("numberOfDocument").exists().withMessage("Назава документу не вказана."),
  check("dateOfDocument").exists().withMessage("Дата документу не вказана."),
  check("provider").exists().withMessage("Постачальник не вказаний."),
  check("name").exists().withMessage("Ім'я не вказане."),
  check("code").exists().withMessage("Код не вказаний."),
  check("unitOfMeasure").exists().withMessage("Одиниця виміру не вказана."),
  check("price").exists().withMessage("Ціна за одиницю не вказана."),
  check("arrived").exists().withMessage("Кількість майна що найдійна не казана."),
  check("out").exists().withMessage("Кількість майна що вибула не казана."),
  check("amount").exists().withMessage("Кількість майна що становить не казана."),
  check("serialCode").exists().withMessage("Заводський номер не вказаний."),
];


import { CadastroEpi } from "../../../models/Epis";

const formatarNome = (nome: string) => {
  if (!nome) return "";
  const palavras = nome.toLowerCase().split(" ");
  palavras[0] = palavras[0].charAt(0).toUpperCase() + palavras[0].slice(1);
  return palavras.join(" ");
};

export const epiPostService = async (empresaId: string, descricao: string) => {
  const descricaoFormatada = formatarNome(descricao);

  const data = await CadastroEpi.create({
    empresa_id: Number(empresaId),
    descricao: descricaoFormatada,
  });

  return data;
};

export const epiGetAllService = async (empresaId: string) => {
  const data = await CadastroEpi.findAll({
    where: {
      empresa_id: Number(empresaId),
    },
  });

  return data;
};

export const epiGetService = async (empresaId: string, idepi: string) => {
  const data = await CadastroEpi.findOne({
    where: {
      empresa_id: Number(empresaId),
      id: idepi,
    },
  });

  return data;
};

export const epiDeleteService = (empresaId: string, idepi: string) => {
  const data = CadastroEpi.destroy({
    where: {
      empresa_id: Number(empresaId),
      id: idepi,
    },
  });

  return data;
};

export const epiPutService = (
  empresaId: string,
  descricao: string,
  epiId: string
) => {
  const descricaoFormatada = formatarNome(descricao);

  const data = CadastroEpi.update(
    {
      descricao: descricaoFormatada,
    },
    {
      where: {
        empresa_id: Number(empresaId),
        id: epiId,
      },
    }
  );

  return data;
};
